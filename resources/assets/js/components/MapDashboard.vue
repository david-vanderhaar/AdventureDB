<template>
    <div class="container">
        <div id="map" class="grey"></div>
  </div>
</template>

<script>
import mapStyles from './mapjs/map-styles';
import mapIcon from './mapjs/map-icons'; //import icons for map objects

    export default {
        data() {
            return {
                map: null,
                infoWindow: null,
                watchId: null,
                pos: null,
                adventurerMarker: null,
                adventurerIcon: {
                    path: mapIcon['adventurer']['WingedSword'],
                    fillColor: 'white',
                    fillOpacity: 0.8,
                    scale: .1,
                    strokeColor: 'black',
                    strokeWeight: 1
                }, //end adventurerIcon
                adventurerEncounterRangeMarker: null,
            }
        }, //end data

        methods: {
            initMap() {
                this.map = new google.maps.Map($('#map')[0], {
                  center: {lat: 38.0423268, lng: -84.49276569999999},
                  zoom: 14,
                  styles: mapStyles['army']
                });
                this.infoWindow = new google.maps.InfoWindow;

                this.getCurrentLocation();
                this.updateAdventurerPosition(this.infoWindow, this.map, this.handleLocationError);
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

            generateAdventurer () {
                this.adventurerMarker = new google.maps.Marker({
                      position: this.pos,
                      map: this.map,
                      icon: this.adventurerIcon,
                      title: 'Adventurer, you are here'
                    });

                this.showHideEncounterRange();
            }, //end generateAdventurer

            updateAdventurerPosition (infoWindow, map, handleLocationError) {
                // Try HTML5 geolocation.
                if (navigator.geolocation) {

                    //Clear old watch first, then create new one
                    navigator.geolocation.clearWatch(this.watchId);

                    //Set watch id and watch position
                     this.watchId = navigator.geolocation.watchPosition(this.updateAdventurerSuccess, () => {
                          this.handleLocationError(true, infoWindow, map.getCenter());
                          }, { enableHighAccuracy: true, timeout: (10 * 1000 * 1000), maximumAge: (10 * 1000) }
                          );

                } else {
                    // Browser doesn't support Geolocation
                    this.handleLocationError(false, infoWindow, map.getCenter());
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

                console.log(this.pos.lat + ' ' + this.pos.lng);

                //Updates Adventurer Marker
                this.adventurerMarker.setPosition(this.pos);

                //Monsters check for adventurer
                // checkForAdventurer();
                //Adventurer checks for monsters
                // checkForMonster();
                // checkForTreasure();
                // checkForInteractable();
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
                        radius: 400
                    });
                }
            }, //end showHideEncounterRange
        }, //end methods

        mounted() {
            this.initMap();
        }, //end mounted
    }
</script>

<style>
    #map {
          height: 80vh;
      }
</style>

