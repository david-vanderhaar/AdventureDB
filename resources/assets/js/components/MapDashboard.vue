<template>
    <div class="container">
        <div id="map" class="grey"></div>

        <!-- Modal Structure -->
        <div id="encounter-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>You've Found Something!</h4>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="adventurerActive.name"></h5>
                        </div>
                        <div class="row">
                            <p class="flow-text">Stamina: <button class="btn red" v-text="adventurerActive.stamina"></button></p><div class="divider"></div>
                        </div>
                        <div class="row">
                            <p class="flow-text">Defense: <button class="btn red" v-text="adventurerActive.defense"></button></p><div class="divider"></div>
                        </div>
                        <div class="row">
                            <p class="flow-text">Attack: <button class="btn red" v-text="adventurerActive.attack"></button></p><div class="divider"></div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="adventurerActive.name"></h5>
                        </div>
                        <div class="row">
                            <p class="flow-text">Stamina: <button class="btn blue" v-text="adventurerActive.stamina"></button></p><div class="divider"></div>
                        </div>
                        <div class="row">
                            <p class="flow-text">Defense: <button class="btn blue" v-text="adventurerActive.defense"></button></p><div class="divider"></div>
                        </div>
                        <div class="row">
                            <p class="flow-text">Attack: <button class="btn blue" v-text="adventurerActive.attack"></button></p><div class="divider"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                    <a class="modal-action modal-close waves-effect waves-green btn-flat">Fight!</a>
                    <a class="modal-action modal-close waves-effect waves-green btn-flat">Run</a>
            </div>
        </div>
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
                adventurerActive: { //placeholder for encounter modal initialization
                    name: 'none',
                    stamina: '0',
                    defense: '0',
                    attack: '0'
                },
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
                monsterActive: null,
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
        created() {

            //initialize the encounter modal
            $(document).ready(function(){
                // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
                 $('.modal').modal({
                      dismissible: false, // Modal can be dismissed by clicking outside of the modal
                      opacity: .5, // Opacity of modal background
                      inDuration: 300, // Transition in duration
                      outDuration: 200, // Transition out duration
                    }
                  );
            });
        },

        mounted() {
            this.initMap();
            this.getMonsters();
            this.getActiveAdventurer();
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

