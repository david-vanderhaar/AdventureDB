<template>
    <div class="container">
        <div id="map" class="grey"></div>
  </div>
</template>

<script>
import mapStyles from './mapjs/map-styles';
import {generateAdventurer, adventurerIcon} from './mapjs/adventurer.js';

    export default {
        data() {
            return {
                map: null,
                infoWindow: null,
                pos: null,
                adventurerMarker: null,
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
                  generateAdventurer(this.pos, this.map, this.adventurerMarker);

                }, () => {
                  this.handleLocationError(true, this.infoWindow, this.map.getCenter());
                });
              } else {
                // Browser doesn't support Geolocation
                this.handleLocationError(false, this.infoWindow, this.map.getCenter());
              }
            },

            handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
                infoWindow.open(this.map);
            },
        }, //end methods

        mounted() {
            console.log(generateAdventurer);
            console.log(adventurerIcon);
            this.initMap();
        }, //end mounted
    }
</script>

<style>
    #map {
          height: 80vh;
      }
</style>

