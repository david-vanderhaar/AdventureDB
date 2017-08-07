import mapStyles from './map-styles'; //import map styles

export default {

            /*
            -------------------------------
                          Map
            -------------------------------
            */

            initMap() {
                this.map = new google.maps.Map($('#map')[0], {
                  center: {lat: 38.0423268, lng: -84.49276569999999},
                  zoom: 18,
                  styles: mapStyles['fantasy'],
                  zoomControl: true,
                  mapTypeControl: false,
                  scaleControl: true,
                  streetViewControl: false,
                  rotateControl: false,
                  fullscreenControl: false
                });
                this.infoWindow = new google.maps.InfoWindow;

                this.getCurrentLocation();
                this.updateAdventurerPosition();

            },

            getCurrentLocation() {
                // Try HTML5 geolocation.
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {

                  this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  };

                  this.infoWindow.setPosition(this.pos);
                  this.infoWindow.setContent('Adventurer, you are here');
                  this.infoWindow.open(this.map);

                  this.map.setCenter(this.pos);

                  //Generates Adventurer Marker
                  this.generateAdventurer(this.pos, this.map);
                  //Gets all monsters in range
                  this.getMonstersInRange((this.encounterRange / 1000) * 10);
                  //Gets all treasures in range
                  this.getTreasuresInRange((this.encounterRange / 1000) * 5);

                }, () => {
                  this.handleLocationError(true, this.infoWindow, this.map.getCenter());
                });
              } else {
                // Browser doesn't support Geolocation
                this.handleLocationError(false, this.infoWindow, this.map.getCenter());
              }
            }, //end getCurrentLocation

            handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
                infoWindow.open(this.map);
            }, //end handleLocationError

            /*
            -------------------------------
                          Adventurer
            -------------------------------
            */

            generateAdventurer () {
                this.adventurerMarker = new google.maps.Marker({
                      position: this.pos,
                      map: this.map,
                      icon: this.adventurerIcon,
                      title: 'Adventurer, you are here'
                    });

                this.showHideEncounterRange();
            }, //end generateAdventurer

            getActiveAdventurer() {
                 axios.get('/api/adventurer/user/'+this.user.id)
                .then((response) => { 
                    response.data.forEach((adventurer) => {
                      if (adventurer.active) {
                        this.adventurerActive = adventurer; //capture users active adventurer
                      }
                    });
                    

                });
            }, //end getAdventurers

            openAdventurerDetailModal() {
                $('#adventurer-modal').modal('open'); //open modal
            }, //end openAdventurerDetailModal

            updateAdventurerPosition () {
                // Try HTML5 geolocation.
                if (navigator.geolocation) {

                    //Clear old watch first, then create new one
                    navigator.geolocation.clearWatch(this.watchId);

                    //Set watch id and watch position
                     this.watchId = navigator.geolocation.watchPosition(this.updateAdventurerSuccess, () => {
                          this.handleLocationError(true, this.infoWindow, this.map.getCenter());
                          }, { enableHighAccuracy: true, timeout: (10 * 1000 * 1000), maximumAge: (10 * 1000) }
                          );

                } else {
                    // Browser doesn't support Geolocation
                    this.handleLocationError(false, this.infoWindow, this.map.getCenter());
                }
            }, //end updateAdventurerPosition

            pauseUpdateAdventurerPosition () {
                if (navigator.geolocation) {
                    navigator.geolocation.clearWatch(this.watchId);
                }
            }, //end updateAdventurerPositionStop

            updateAdventurerSuccess (position) {
                this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                //Update encounter range to adventurer
                if (this.adventurerEncounterRangeMarker != null) {
                    this.adventurerEncounterRangeMarker.setCenter(this.pos);
                }


                //Updates Adventurer Marker
                this.adventurerMarker.setPosition(this.pos);

                if (this.adventurerActive.active == true) { //first check if user has embarked w/ adventurer
                  //Adventurer checks for monsters
                  this.checkForEntity(this.monsters, 'monster');
                } else {
                  //notify user
                }
                
            }, //end updateAdventurerSuccess

            showHideEncounterRange () {
                //First hide and clear old marker
                if (this.adventurerEncounterRangeMarker != null) {
                    this.adventurerEncounterRangeMarker.setMap(null);
                    this.adventurerEncounterRangeMarker = null;
                } else {
                    //Build the Adventurer encounter radius here
                    //This circle is the graphical representation of the range within whci adventurer will encounter monsters etc.
                    this.adventurerEncounterRangeMarker = new google.maps.Circle({
                        strokeColor: '#0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: 'blue',
                        fillOpacity: 0.35,
                        map: this.map,
                        center: this.pos,
                        radius: this.encounterRange
                    });
                }
            }, //end showHideEncounterRange

            /*
            -------------------------------
                          Entities
            -------------------------------
            */

            checkForEntity (entities, entityType) {
              if (entities != [] && this.adventurerEncounterRangeMarker != null) { 
                let bounds = this.adventurerEncounterRangeMarker.getBounds();

                entities.forEach((entity) => {
                  if (bounds.contains({lat: parseFloat(entity.lat), lng: parseFloat(entity.lng)})) {                    

                      switch(entityType) {
                        case 'monster':
                          if (this.encounter == false) {
                             $('#monster-modal').modal('open'); //open modal
                             this.activateMonster(entity); //activate monster

                           }

                             // this.pauseUpdateAdventurerPosition();
                             // this.showHideEncounterRange(); //break the forEach after first encounter
                            break;
                        case 'treasure':
                            
                            break;


                    } //end switch

                    this.encounter = true; //set status to true to interupt further activations

                  }

                  

                });
              }
          }, //end check for entity

          generateMarkers(entities, markers, encounterRangeMarkers, iconGroup) {

              if(markers) { //check for existing markers
                this.clearMarkers(markers, encounterRangeMarkers);
              }

              // Add Interactable Markers
              (entities).forEach((entity) => {
                markers.push(new google.maps.Marker({
                  position: {lat: parseFloat(entity.lat), lng: parseFloat(entity.lng)},
                  map: this.map,
                  icon: iconGroup[entity.type[0]['name']],
                  title: 'You found something!'
                }));

                // Add Interactable Encounter Range Markers
                encounterRangeMarkers.push(new google.maps.Circle({
                  strokeColor: '#0000',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: 'red',
                  fillOpacity: 0.35,
                  map: this.map,
                  center: {lat: parseFloat(entity.lat), lng: parseFloat(entity.lng)},
                  radius: 5
                }));
              });

          }, //end generate markers

          clearMarkers(markers, encounterRangeMarkers) {
            //Remove Interactable markers from map
            markers.forEach((marker) => {
              marker.setMap(null);
              marker = null; 
            });

            encounterRangeMarkers.forEach((encounterRangeMarker) => {
              encounterRangeMarker.setMap(null);
              encounterRangeMarker = null;
            });

            //Clear Encounter markers array
            encounterRangeMarkers = [];

            //Clear Interactable markers array
            markers = [];
          }, //end clear markers

            /*
            -------------------------------
                          Monsters
            -------------------------------
            */

            getMonsters() { //get all monsters
              axios.get('/api/monster')
                .then((response) => { 
                    this.monsters = response.data;
                    this.generateMarkers(this.monsters, this.monsterMarkers, this.monsterEncounterRangeMarkers, this.monsterIcon);
                })
                .catch((error) => {
                  console.log(error);
                });
            },

            getMonstersInRange(range) { //get monsters in certain range of user (in km)
              // range = (this.encounterRange / 1000) * 30;
              console.log(range);
              axios.get('/api/monster/'+this.pos.lat+'/'+this.pos.lng+'/'+range)
                .then((response) => { 
                    this.monsters = response.data;
                    this.generateMarkers(this.monsters, this.monsterMarkers, this.monsterEncounterRangeMarkers, this.monsterIcon);
                })
                .catch((error) => {
                  console.log(error);
                });
            }, 

            activateMonster(monster) {
                axios.patch('/api/monster/activate/'+monster.id)
                .then((response) => { 
                    console.log('monster activated');
                    console.log(monster);
                    this.monsterActive = monster;
                });
            }, //end activateMonster

            deactivateMonster(monster) {
                    axios.patch('/api/monster/deactivate/'+monster.id)
                        .then((response) => { 
                          console.log(response.data);
                          this.encounter = false; //set status to false to continue further activations
                        });
            }, //end deactivateMonster  

            /*
            -------------------------------
                          Treasures
            -------------------------------
            */

            getTreasuresInRange(range) { //get monsters in certain range of user (in km)
              // range = (this.encounterRange / 1000) * 30;
              console.log(range);
              axios.get('/api/treasure/'+this.pos.lat+'/'+this.pos.lng+'/'+range)
                .then((response) => { 
                    this.treasures = response.data;
                    this.generateMarkers(this.treasures, this.treasureMarkers, this.treasureEncounterRangeMarkers, this.treasureIcon);
                })
                .catch((error) => {
                  console.log(error);
                });
            },//end getTreasuresInRange

            pickUpTreasure() { //add value of treasure to adventurer then delete treasure

            }, //end pickUpTreasure
          
        } //end methods

