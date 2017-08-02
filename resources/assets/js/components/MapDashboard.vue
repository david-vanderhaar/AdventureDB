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
                   'Slime': {
                        path: mapIcon['monster']['slime'],
                        fillColor: 'green',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: 'black',
                        strokeWeight: 1
                    },
                    'Bear': {
                        path: mapIcon['monster']['bear'],
                        fillColor: 'brown',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: 'black',
                        strokeWeight: 1
                    },
                    'Bandit': {
                        path: mapIcon['monster']['bandit'],
                        fillColor: 'black',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: 'black',
                        strokeWeight: 1
                    }
                }//end monster icons
            }//end return
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

