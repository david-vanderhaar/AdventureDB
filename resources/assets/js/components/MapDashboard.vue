<template>
    <div class="container">
        <div id="map" class="grey"></div>
  </div>
</template>

<script>
import mapIcon from './mapjs/map-icons'; //import icons for map objects
import adventurerMethods from './mapjs/adventurer';

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

        methods: adventurerMethods,

        mounted() {
            this.initMap();
            console.log('map dash mounted');
        }, //end mounted

        beforeDestroy() {
            console.log('map dash destroy');
        }, //end beforeDestroy
    }
</script>

<style>
    #map {
          height: 80vh;
      }
</style>

