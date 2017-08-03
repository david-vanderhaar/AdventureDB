<template>
    <div class="container">
        <div id="map" class="grey"></div>

        <!-- Modal Structure -->
        <div id="monster-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>Look Out!</h4>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="monsterActive.type['0'].name"></h5>
                        </div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Stamina:</p></div>
                            <div class="col s6"><p class="center btn blue" v-text="monsterActive.type['0'].stamina"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Defense:</p></div>
                            <div class="col s6"><p class="center btn blue" v-text="monsterActive.type['0'].defense"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Attack:</p></div>
                            <div class="col s6"><p class="center btn blue" v-text="monsterActive.type['0'].attack"></p></div>
                        </div>
                            <div class="divider"></div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="adventurerActive.name"></h5>
                        </div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Stamina:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="adventurerActive.stamina"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Defense:</p></div>
                           <div class="col s6"> <p class="center btn red" v-text="adventurerActive.defense"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Attack:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="adventurerActive.attack"></p></div>
                        </div>
                            <div class="divider"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                    <a class="modal-action modal-close waves-effect waves-green btn-flat">Fight!</a>
                    <a class="modal-action modal-close waves-effect waves-green btn-flat" @click="deactivateMonster(monsterActive)">Run</a>
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

                encounter: false,

                //Adventurer Vars
                adventurerActive: { //placeholder for encounter modal initialization
                    active: false,
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
                monsterActive: { //placeholder for encounter modal initialization
                    active: false,
                    type:[
                        {
                            name:'none',
                            stamina: '0',
                            defense: '0',
                            attack: '0'

                        }
                    ],
                },
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

        }, //end mounted

        beforeDestroy() {
            
        }, //end beforeDestroy
    }
</script>

<style>
    #map {
          height: 60vh;
      }
</style>

