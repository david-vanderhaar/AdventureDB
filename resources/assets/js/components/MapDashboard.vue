<template>
    <div class="container">
        <div id="map" class="grey"></div>
  </div>
</template>

<script>
import mapIcon from './mapjs/map-icons'; //import icons for map objects
import mapMethods from './mapjs/adventurer';

    export default {
        data() {
            return {
                map: null,
                infoWindow: null,
                watchId: null,
                pos: null,

                //Adventurer Vars
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

                //Monster Vars
                monsters: [],
                monsterMarkers: [],
                monsterEncounterRangeMarkers: [],
                monsterIcon: {
                    path: mapIcon['monster']['slime'],
                    fillColor: 'white',
                    fillOpacity: 0.8,
                    scale: .15,
                    strokeColor: 'black',
                    strokeWeight: 1
                }
            }
        }, //end data

        methods: mapMethods,

        mounted() {
            this.initMap();
            this.getMonsters();
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

