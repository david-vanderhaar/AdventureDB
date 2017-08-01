<template>
    <div class="container">
        <div id="map" class="grey"></div>
  </div>
</template>

<script>
import mapStyles from './mapjs/map-styles';

    export default {
        data() {
            return {
                map: null,
                infoWindow: null,
                pos: null,
            }
        },

        methods: {
            initMap() {
                this.map = new google.maps.Map($('#map')[0], {
                  center: {lat: 38.0423268, lng: -84.49276569999999},
                  zoom: 14,
                  styles: mapStyles['dark']
                });
                this.infoWindow = new google.maps.InfoWindow;

                // this.getCurrentLocation();
            },
        },

        mounted() {
            console.log($('#map')[0]);
            this.initMap();
        }
    }
</script>

<style>
    #map {
          height: 80vh;
      }
</style>