<template>
    <div class="container">
        <div class="row">
            <br>
            <div id="map" class="grey"></div>
        </div>

        <div class="row">
            <div class="col s6 center">
                <button class="btn" @click="searchForEntities()">Search</button>
            </div>
            <div class="fixed-action-btn toolbar">
                <a class="btn-floating btn-large">
                  <i class="large material-icons">menu</i>
                </a>
                <ul>
                  <li class="waves-effect waves-light"><router-link to="/"><i class="material-icons white-text">home</i></router-link></li>
                  <li class="waves-effect waves-light white-text"><a @click="openAdventurerDetailModal()"><i class="material-icons">accessibility</i></a></li>
                </ul>
            </div>
        </div>

        <!-- Monster Modal Structure -->
        <div id="monster-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>Look Out!</h4>
                <div class="row">
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="monsterActive.type['0'].name"></h5>
                        </div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Adventurers Defeated:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="monsterActive.adventurers_defeated"></p></div>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Treasure:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="monsterActive.treasure"></p></div>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Stamina:</p></div>
                            <div class="col s6"><p class="center btn green" v-text="monsterActive.type['0'].stamina"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Defense:</p></div>
                            <div class="col s6"><p class="center btn blue" v-text="monsterActive.type['0'].defense"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Attack:</p></div>
                            <div class="col s6"><p class="center btn orange" v-text="monsterActive.type['0'].attack"></p></div>
                        </div>
                            <div class="divider"></div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row">
                            <h5 v-text="adventurerActive.name"></h5>
                        </div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Stamina:</p></div>
                            <div class="col s6"><p class="center btn green" v-text="adventurerActive.stamina"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Defense:</p></div>
                           <div class="col s6"> <p class="center btn blue" v-text="adventurerActive.defense"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Attack:</p></div>
                            <div class="col s6"><p class="center btn orange" v-text="adventurerActive.attack"></p></div>
                        </div>
                            <div class="divider"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                    <a class="modal-action modal-close waves-effect waves-green btn-flat" @click="battleModal()">Fight!</a>
                    <a class="modal-action modal-close waves-effect waves-green btn-flat" @click="deactivateMonster(monsterActive)">Run</a>
            </div>
        </div>

        <!-- Adventurer Detail Modal Structure -->
        <div id="adventurer-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4 v-text="adventurerActive.name"></h4>
                <div class="row">
                    <div class="col s12 m6">
                         <div class="row">
                            <div class="col s6"><p class="flow-text">Monsters Defeated:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="adventurerActive.monsters_defeated"></p></div>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Treasure:</p></div>
                            <div class="col s6"><p class="center btn red" v-text="adventurerActive.treasure"></p></div>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Stamina:</p></div>
                            <div class="col s6"><p class="center btn green" v-text="adventurerActive.stamina"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Defense:</p></div>
                           <div class="col s6"> <p class="center btn blue" v-text="adventurerActive.defense"></p></div>
                        </div>
                            <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Attack:</p></div>
                            <div class="col s6"><p class="center btn orange" v-text="adventurerActive.attack"></p></div>
                        </div>
                            <div class="divider"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                    <a class="modal-action modal-close waves-effect waves-green btn-flat">Close!</a>
            </div>
        </div>

        <!-- Treasure Detail Modal Structure -->
        <div id="treasure-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4>{{adventurerActive.name}} found a {{treasureActive.type[0].value}} piece {{treasureActive.type[0].name}} treasure!</h4>                
                <div class="row">
                    <div class="col s12 m6">
                         <div class="row">
                            <div class="col s6"><p class="flow-text">Monsters Defeated:</p></div>
                            <div class="col s6"><p class="center btn" v-text="adventurerActive.monsters_defeated"></p></div>
                        </div>
                        <div class="divider"></div>
                        <div class="row">
                            <div class="col s6"><p class="flow-text">Treasure:</p></div>
                            <div class="col s6"><p class="center btn" v-text="adventurerActive.treasure"></p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a class="modal-action modal-close waves-effect waves-green btn-flat" @click="pickUpTreasure()">Take It!</a>
                <a class="modal-action modal-close waves-effect waves-green btn-flat" @click="leaveTreasure()">Leave It!</a>
            </div>
        </div>

        <!-- Battle Modal -->
        <div id="battle-modal" class="modal modal-fixed-footer">
            <div class="modal-content">
              <div class="row">
                  <div id="battle-adventurer" class="col s4">
                      <div style="height: 40px;" class="row center"><p class="flow-text">{{adventurerActive.name}}</p></div>
                      <div class="row center"><i class="material-icons prefix green-text text-darken-4">directions_run</i></div>
                      <div class="row center"><button @click="battle(0, 'stamina')" class="center btn green waves-effect" v-text="adventurerActive.stamina"></button></div>
                      <div class="row center"><i class="material-icons prefix blue-text text-darken-4">brightness_5</i></div>
                      <div class="row center"><button @click="battle(1, 'defense')" class="center btn blue waves-effect" v-text="adventurerActive.defense"></button></div>
                      <div class="row center"><i class="material-icons prefix orange-text text-darken-4">gavel</i></div>
                      <div class="row center"><button @click="battle(2, 'attack')" class="center btn orange waves-effect" v-text="adventurerActive.attack"></button></div>
                  </div>
                  <div id="battle-center" class="col s4">
                    <div class="row center" v-if="victory == -1">
                        <transition name="fade">
                            <a @click="goToDashAfterDefeat()" class="btn red white-text modal-action modal-close waves-effect waves-green btn-flat">Defeat!</a>
                        </transition>
                    </div>
                      <div class="row center" v-if="victory == 0">
                        <transition name="fade">
                          <button class="center btn-large grey waves-effect" v-if="lastAction == 0"><i class="material-icons white-text">call_split</i></button>
                        </transition>
                        <transition name="fade">
                          <button class="center btn-large grey waves-effect" v-if="lastAction == 1"><i class="material-icons white-text">call_received</i></button>
                        </transition>
                        <transition name="fade">
                          <button class="center btn-large grey waves-effect" v-if="lastAction == 2"><i class="material-icons white-text">call_made</i></button>
                        </transition>

                      </div>
                  </div>
                  <div id="battle-monster" class="col s4">
                      <div style="height: 40px;" class="row center"><p class="flow-text">{{monsterActive.type['0'].name}}</p></div>
                      <div class="row center"><i class="material-icons prefix green-text text-darken-4">directions_run</i></div>
                      <div class="row center"><button class="center btn green waves-effect" v-text="monsterActive.type['0'].stamina"></button></div>
                      <div class="row center"><i class="material-icons prefix blue-text text-darken-4">brightness_5</i></div>
                      <div class="row center"><button class="center btn blue waves-effect" v-text="monsterActive.type['0'].defense"></button></div>
                      <div class="row center"><i class="material-icons prefix orange-text text-darken-4">gavel</i></div>
                      <div class="row center"><button class="center btn orange waves-effect" v-text="monsterActive.type['0'].attack"></button></div>
                  </div>
              </div>                
            </div>
            <div class="modal-footer red">
                <p class="left white-text" v-text="battleMsg" v-if="victory == 0">Battle</p>
                <a v-if="victory == 1" class="modal-action modal-close waves-effect waves-green btn-flat white-text">Claim Victory!</a>
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

                user: JSON.parse($("meta[name=auth-user]").attr('content')),

                map: null,
                infoWindow: null,
                watchId: null,
                pos: null,

                encounter: false,
                encounterRange: 30, //Range within which adventure encounters entity

                //Battle Vars
                victory: 0,
                battleMsg: 'Battle',
                lastAction: 0,
                
                //Adventurer Vars
                adventurerActive: { //placeholder for encounter modal initialization
                    active: false,
                    name: 'none',
                    stamina: 0,
                    defense: 0,
                    attack: 0
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
                    treasure: 0,
                    adventurers_defeated: 0,
                    type:[
                        {
                            name:'No Monster',
                            stamina: 2,
                            defense: 2,
                            attack: 0

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
                    },
                    'Elton': {
                        path: mapIcon['monster']['elton'],
                        fillColor: 'gold',
                        fillOpacity: 1,
                        scale: .2,
                        strokeColor: 'black',
                        strokeWeight: 1
                    },
                    'Janine': {
                        path: mapIcon['monster']['janine'],
                        fillColor: 'purple',
                        fillOpacity: 1,
                        scale: .2,
                        strokeColor: 'black',
                        strokeWeight: 1
                    }
                },//end monster icons

                //Treasure Vars
                treasureActive: {
                    id: null,
                    type: [
                        {
                            name: '',
                            value: 0
                        }
                    ]
                },
                treasures: [],
                treasureMarkers: [],
                treasureEncounterRangeMarkers: [],
                treasureIcon: { 
                   'copper': {
                        path: mapIcon['treasure']['coin'],
                        fillColor: '#D36112',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: '#851821',
                        strokeWeight: 1
                    },
                    'silver': {
                        path: mapIcon['treasure']['coin'],
                        fillColor: 'silver',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: 'black',
                        strokeWeight: 1
                    },
                    'gold': {
                        path: mapIcon['treasure']['coin'],
                        fillColor: 'gold',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: '#7D6608',
                        strokeWeight: 1
                    },
                    'gem': {
                        path: mapIcon['treasure']['gem'],
                        fillColor: 'violet',
                        fillOpacity: 0.8,
                        scale: .1,
                        strokeColor: 'purple',
                        strokeWeight: 1
                    }
                }//end treasure icons
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
            this.getActiveAdventurer();

        }, //end mounted

        beforeDestroy() {

        }, //end beforeDestroy
    }
</script>

<style>
    #map {
          height: 70vh;
      }

    #battle-modal {
        height: 100vh;
        width: 100vw;
    }

    #battle-center {
        margin-top: 60%;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0
    }
</style>

