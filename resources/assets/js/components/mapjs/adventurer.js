import mapStyles from './map-styles'; //import map styles

export default {

            /*
            -------------------------------
                          Map
            -------------------------------
            */

            initMap() {

              console.log('init map');
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
                  this.getMonstersInRange();
                  //Gets all treasures in range
                  this.getTreasuresInRange();

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

            deleteAdventurerOnDefeat(adventurerId) {
                axios.delete('/api/adventurer/'+adventurerId)
                .then((response) => { 
                    
                    Materialize.toast(response.data.name + ' has retired, off to start the final journey', 4000);
                })
                .catch((error) => {
                    Materialize.toast(response.data.name + ' is not yet ready to lay down the spirt of adventure!', 4000);
                    Materialize.toast('We are having server issues, try again soon!', 4000);
                });
            }, //end deleteAdventurers

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
                })
                .catch((error) => {
                  Materialize.toast('We couldn\'t retrieve your adventure, please go check back at the tavern', 4000);
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
                  //Adventurer checks for map entities
                  this.checkForEntity(this.monsters, 'monster');
                  this.checkForEntity(this.treasures, 'treasure');
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
                             if (this.encounter == false) {
                               $('#treasure-modal').modal('open'); //open modal
                               this.treasureActive = entity;
                           }
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

          searchForEntities() {//regenerate markers and entities within user range
            this.getMonstersInRange();
            this.getTreasuresInRange();
          },//end search for entities

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
                  Materialize.toast('The monsters have vanished. Check back later', 4000);
                });
            },

            getMonstersInRange(range) { //get monsters in certain range of user (in km)
              range = (this.encounterRange / 1000) * 10;
              console.log(range);
              axios.get('/api/monster/'+this.pos.lat+'/'+this.pos.lng+'/'+range)
                .then((response) => { 
                    this.monsters = response.data;
                    this.generateMarkers(this.monsters, this.monsterMarkers, this.monsterEncounterRangeMarkers, this.monsterIcon);
                })
                .catch((error) => {
                  console.log(error);
                  Materialize.toast('The monsters have vanished. Check back later', 4000);
                });
            }, 

            activateMonster(monster) {
                axios.patch('/api/monster/activate/'+monster.id)
                .then((response) => { 
                    console.log('monster activated');
                    console.log(monster);
                    this.monsterActive = monster;
                })
                .catch((error) => {
                  console.log(error);
                  Materialize.toast('This monster must be hiding. Check back later', 4000);
                });
            }, //end activateMonster

            deactivateMonster(monster) {
                    axios.patch('/api/monster/deactivate/'+monster.id)
                        .then((response) => { 
                          console.log(response.data);
                          setTimeout(() => { //set status to false to continue further activations
                              this.encounter = false;
                              Materialize.toast('You are once again ready for an encounter', 4000);
                          }, 20000); 
                        })
                        .catch((error) => {
                          console.log(error);
                          setTimeout(() => { //set status to false to continue further activations
                              this.encounter = false;
                              Materialize.toast('You are once again ready for an encounter', 4000);
                          }, 20000);
                          Materialize.toast('This one may come back for you...', 4000);
                        });
            }, //end deactivateMonster

            deleteMonster(id) {
                axios.delete('/api/monster/'+id)
                .then((response) => { 
                    
                    this.getMonstersInRange(); //on succesfull delete, refresh monsters
                    
                })
                .catch((error) => {
                    console.log(error);
                });
            }, //end deleteTreasures  

            /*
            -------------------------------
                          Treasures
            -------------------------------
            */

            getTreasuresInRange(range) { //get monsters in certain range of user (in km)
              range = (this.encounterRange / 1000) * 5;
              console.log(range);
              axios.get('/api/treasure/'+this.pos.lat+'/'+this.pos.lng+'/'+range)
                .then((response) => { 
                    this.treasures = response.data;
                    this.generateMarkers(this.treasures, this.treasureMarkers, this.treasureEncounterRangeMarkers, this.treasureIcon);
                })
                .catch((error) => {
                  console.log(error);
                  Materialize.toast('We may have trouble finding treasure today. Check back later', 4000);
                });
            },//end getTreasuresInRange

            pickUpTreasure() { //add value of treasure to adventurer then delete treasure
              this.adventurerActive.treasure += this.treasureActive.type[0].value;
              axios.patch('api/adventurer/add/treasure', this.adventurerActive)
                .then((response) => {
                  this.deleteTreasure(this.treasureActive.id); //remove treasure once it is picked up
                  Materialize.toast(this.adventurerActive.name + ' picked up some treasure', 4000);
                  setTimeout(() => {
                      this.encounter = false;
                      Materialize.toast('You are once again ready for an encounter', 4000);
                  }, 20000);
                })
                .catch((error) => {
                  console.log(error);
                  Materialize.toast('Unable to pick it up,' + this.adventurerActive.name + ' feels this treasure should be left alone.', 4000);
                  setTimeout(() => {
                      this.encounter = false;
                      Materialize.toast('You are once again ready for an encounter', 4000);
                  }, 20000);
                });
            }, //end pickUpTreasure

            leaveTreasure() {
              setTimeout(() => {
                  this.encounter = false;
                  Materialize.toast('You are once again ready for an encounter', 4000);
              }, 20000);
            }, //end leave treasure

            deleteTreasure(treasureId) {
                axios.delete('/api/treasure/'+treasureId)
                .then((response) => { 
                    
                    this.getTreasuresInRange(); //on succesfull delete, refresh treasures
                    
                })
                .catch((error) => {
                    console.log(error);
                });
            }, //end deleteTreasures

            /*
            -------------------------------
                          Battle Logic
            -------------------------------
            */
            battle(adventurerAction, actionType) {
             
             if (this.adventurerActive[actionType] > 0) { //check that adventurer is not out of this acton

              /*if victory is 0, neither entity has won
              if victory is -1, adventurer is defeated
              if victory is 1, adventurer wins*/

              this.victory = 0;

              console.log('Adventurer Action ' + adventurerAction);

              //monster selects random stat
              let monsterAction = this.getRandomAction(0,2);
              console.log('Monster Action ' + monsterAction);

              this.compareActions(adventurerAction, monsterAction);

              this.victoryCheck(this.adventurerActive, this.monsterActive);

            } else {
              this.battleMsg = 'Cannot perform this action.';
            }



            },//end battle

            victoryCheck(adventurer, monster) {
              if (this.monsterActive.type[0].stamina == 0
                     && this.monsterActive.type[0].defense == 0
                      && this.monsterActive.type[0].attack == 0) {
                      this.battleMsg = 'You win!';
                      this.victory = 1;

                      this.victoryAdd();
                      
                      console.log('You win');
                    } else if (this.adventurerActive.stamina == 0
                     && this.adventurerActive.defense == 0
                      && this.adventurerActive.attack == 0) {
                      this.battleMsg = 'You have been defeated!';
                      this.victory = -1;
                      this.defeatAdd();
                      this.deactivateMonster(this.monsterActive); //deactivate monster
                      console.log('You have been defeated');
                    } else {
                      // this.battleMsg = 'The battle rages on...';
                      console.log('The battle rages on...');
                    }
            }, //end victory check

            
            victoryAdd() {//add value of treasure to adventurer. Bump up monsters defeated counter
              this.adventurerActive.treasure += this.monsterActive.treasure;
              axios.patch('api/adventurer/victory/'+this.adventurerActive.id+'/'+this.adventurerActive.treasure)
                .then((response) => {
                  this.deleteMonster(this.monsterActive.id); //remove monster once it is defeated
                  this.getActiveAdventurer(); //reset active adventurer stats
                  Materialize.toast(this.adventurerActive.name + ' defeated a ' + this.monsterActive.type[0].name + '.', 4000);
                  Materialize.toast(this.adventurerActive.name + ' gained ' + this.monsterActive.treasure + ' peices of treasure.', 4000);
                })
                .catch((error) => {
                  console.log(error);
                  this.getMonstersInRange();
                  Materialize.toast(this.adventurerActive.name + ' just woke up in cold sweat. Perhaps that battle was only a dream', 4000);
                });
            }, //end victory add

            defeatAdd() {
              this.monsterActive.treasure += this.adventurerActive.treasure;
              axios.patch('api/monster/victory/'+this.monsterActive.id+'/'+this.monsterActive.treasure)
                .then((response) => {
                  this.deleteAdventurerOnDefeat(this.adventurerActive.id);

                })
                .catch((error) => {
                  console.log(error);
                  this.getMonstersInRange();
                  Materialize.toast(this.adventurerActive.name + ' just woke up in cold sweat. Perhaps that battle was only a dream', 4000);
                });
            },//end defeat add

            goToDashAfterDefeat() {
              this.$router.push('/');
            }, //end goToDash

            getRandomAction(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                let random = Math.floor(Math.random() * (max - min + 1)) + min;

                switch (random) {
                  case 0:
                    if (this.monsterActive.type[0].stamina > 0) {
                      // this.monsterAction = 0;
                      return 0;
                    } else {
                      return this.getRandomAction(0,2);
                    }

                    break;

                  case 1:
                    if (this.monsterActive.type[0].defense > 0) {
                      // this.monsterAction = 1;
                      return 1;
                    } else {
                      return this.getRandomAction(0,2);
                    }

                    break;

                  case 2:
                    if (this.monsterActive.type[0].attack > 0) {
                      // this.monsterAction = 2;
                      return 2;
                    } else {
                      return this.getRandomAction(0,2);
                    }

                    break;
                }
              }, //end getRandom action

            compareActions(adA, monA) {
              if (adA == 0 && monA == 0) {
                this.adventurerActive.stamina -= 1;
                this.monsterActive.type[0].stamina -= 1;
                this.lastAction = 0;
                this.battleMsg = 'A clash of stamina!';

              } else if (adA == 1 && monA == 1) {
                this.adventurerActive.defense -= 1;
                this.monsterActive.type[0].defense -= 1;
                this.lastAction = 0;
                this.battleMsg = 'A clash of defense!';

              } else if (adA == 2 && monA == 2) {
                this.adventurerActive.attack -= 1;
                this.monsterActive.type[0].attack -= 1;
                this.lastAction = 0;
                this.battleMsg = 'A clash of attack!';

              } else if (adA == 0 && monA == 1) {
                this.monsterActive.type[0].defense -= 1;
                this.lastAction = 1;
                this.battleMsg = this.adventurerActive.name +' outlasted the '+ this.monsterActive.type[0].name+'\'s defense.';

              } else if (adA == 0 && monA == 2) {
                this.adventurerActive.stamina -= 1;
                this.lastAction = 2;
                this.battleMsg = 'The ' + this.monsterActive.type[0].name +'\'s attack struck true.';

              } else if (adA == 1 && monA == 0) {
                this.adventurerActive.defense -= 1;
                this.lastAction = 2;
                this.battleMsg = 'The ' + this.monsterActive.type[0].name +' outlasted '+ this.adventurerActive.name+'\'s defense.';

              } else if (adA == 1 && monA == 2) {
                this.monsterActive.type[0].attack -= 1;
                this.lastAction = 1;
                this.battleMsg = this.adventurerActive.name +' held fast against the '+ this.monsterActive.type[0].name+'\'s attack.';

              } else if (adA == 2 && monA == 0) {
                this.monsterActive.type[0].stamina -= 1;
                this.lastAction = 1;
                this.battleMsg = this.adventurerActive.name +'\'s attack struck true.';

              } else if (adA == 2 && monA == 1) {
                this.adventurerActive.attack -= 1;
                this.lastAction = 2;
                this.battleMsg = 'The ' + this.monsterActive.type[0].name +' held fast against '+ this.adventurerActive.name+'\'s attack.';

              } else {
                console.log('comparison error');
              }

            }, //end compare actions

            battleModal() {
              $('#battle-modal').modal('open'); //open modal
            },//end battle modal

        } //end methods

