<template>
    <div class="container">
        <div class="row">
            <h3 class="white-text">Battle Simulation - Version 4</h3>
        </div>
        <div class="row">
            <div class="col s6">
                <h5 class="white-text">Stat Build One</h5>
                <!-- Dropdown Trigger -->
                <h5 class="white-text dropdown-button" data-activates='dropdown1'>{{sbClassName[1]}}</h5>
                

                <!-- Dropdown Structure -->
                <ul id='dropdown1' class='dropdown-content'>
                  <li><a @click="quickClass(sb1, 0, 1)">Warrior</a></li>
                  <li><a @click="quickClass(sb1, 1, 1)">Assassin</a></li>
                  <li><a @click="quickClass(sb1, 2, 1)">Warden</a></li>
                  <li><a @click="quickClass(sb1, 3, 1)">Mender</a></li>
                  <li class="divider"></li>
                  <li><a @click="quickClass(sb1, 4, 1)">Astromancer</a></li>
                  <li><a @click="quickClass(sb1, 5, 1)">Warlock</a></li>
                  <li><a @click="quickClass(sb1, 6, 1)">Druid</a></li>
                  <li><a @click="quickClass(sb1, 7, 1)">Mage</a></li>
                </ul>
                
                <div class="row">
                  <div class="col s6 red darken-3">
                    <div class="input-field">
                    <label for="sb1S" class="white-text">Life</label>
                    <input id="sb1S" class="white-text" type="number" v-model="sb1.life" selected>
                  </div>
                  </div>
                  <div class="col s6 purple darken-3">
                    <div class="input-field">
                    <label for="sb1S" class="white-text">Stamina</label>
                    <input id="sb1S" class="white-text" type="number" v-model="sb1.stamina" selected>
                  </div>
                  </div>
                  <div class="col s4 blue darken-3">
                    <div class="input-field">
                    <label for="sb1D" class="white-text">Finesse</label>
                    <input class="white-text" type="number" v-model="sb1.finesse">
                  </div>
                  </div>
                  <div class="col s4 green darken-3">
                    <div class="input-field">
                    <label for="sb1D" class="white-text">Defense</label>
                    <input class="white-text" type="number" v-model="sb1.defense">
                  </div>
                  </div>
                  
                  <div class="col s4 orange darken-3">
                    <div class="input-field">
                    <label for="sb1A" class="white-text">Attack</label>
                    <input class="white-text" type="number" v-model="sb1.attack">
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s4 blue darken-1">
                    <div class="input-field">
                    <label class="white-text">Water</label>
                    <input class="white-text" type="number" v-model="sb1.water">
                  </div>
                  </div>
                  <div class="col s4 green darken-1">
                    <div class="input-field">
                    <label class="white-text">Earth</label>
                    <input class="white-text" type="number" v-model="sb1.earth">
                  </div>
                  </div>
                  <div class="col s4 orange darken-1">
                    <div class="input-field">
                    <label class="white-text">Lightning</label>
                    <input class="white-text" type="number" v-model="sb1.lightning">
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s6 center">
                    <h5 class="white-text">Life</h5>
                    <a class="btn-large btn waves-light waves-effect red">{{sb1.life}}</a>
                  </div>
                  <div class="col s6 center">
                    <h5 class="white-text">Stamina</h5>
                    <a class="btn-large btn waves-light waves-effect purple">{{sb1.stamina}}</a>
                  </div>
                  <div class="col s4 center">
                    <span class="white-text">Water</span><a class="btn-large btn waves-light waves-effect blue">{{sb1.water}}</a>
                  </div>
                  <div class="col s4 center">
                    <span class="white-text">Earth</span><a class="btn-large btn waves-light waves-effect green">{{sb1.earth}}</a>
                  </div>
                  <div class="col s4 center">
                    <span class="white-text">Lightning</span><a class="btn-large btn waves-light waves-effect orange">{{sb1.lightning}}</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 center">
                    <h5 class="white-text">Finesse</h5>
                    <div class="row">
                      <div class="col s4">
                        <span class="white-text">Exert</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4">
                        <a class="btn-large btn waves-light waves-effect blue">{{sb1.finesse}}</a>
                        <button class="btn waves-light waves-effect">Move</button>
                      </div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 center">
                    <h5 class="white-text">Defense</h5>
                    <div class="row">
                      <div class="col s4">
                        <span class="white-text">Exert</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4"><a class="btn-large btn waves-light waves-effect green">{{sb1.defense}}</a></div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 center">
                    <h5 class="white-text">Attack</h5>
                    <div class="row">
                      <div class="col s4">
                        <span class="white-text">Exert</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4">
                        <a class="btn-large btn waves-light waves-effect orange">{{sb1.attack}}</a>
                        <button class="btn waves-light waves-effect">Attack</button>
                      </div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row center">
                  <div class="col s12">
                  <button class="btn waves-light waves-effect">Rest</button>
                  </div>
                </div>
            </div>
            <div class="col s6">
                <h5 class="white-text">Stat Build Two</h5>
                <!-- Dropdown Trigger -->
                <h5 class="white-text dropdown-button" data-activates='dropdown2'>{{sbClassName[2]}}</h5>

                <!-- Dropdown Structure -->
                <ul id='dropdown2' class='dropdown-content'>
                  <li><a @click="quickClass(sb2, 0, 2)">Warrior</a></li>
                  <li><a @click="quickClass(sb2, 1, 2)">Assassin</a></li>
                  <li><a @click="quickClass(sb2, 2, 2)">Warden</a></li>
                  <li><a @click="quickClass(sb2, 3, 2)">Mender</a></li>
                  <li class="divider"></li>
                  <li><a @click="quickClass(sb2, 4, 2)">Astromancer</a></li>
                  <li><a @click="quickClass(sb2, 5, 2)">Warlock</a></li>
                  <li><a @click="quickClass(sb2, 6, 2)">Druid</a></li>
                  <li><a @click="quickClass(sb2, 7, 2)">Mage</a></li>
                </ul>
                <div class="row">
                  <div class="col s4 blue darken-3">
                    <div class="input-field">
                    <label for="sb2S" class="white-text">Stamina</label>
                    <input id="sb2S" class="white-text" type="number" v-model="sb2.stamina" selected>
                  </div>
                  </div>
                  
                  <div class="col s4 green darken-3">
                    <div class="input-field">
                    <label for="sb2D" class="white-text">Defense</label>
                    <input class="white-text" type="number" v-model="sb2.defense">
                  </div>
                  </div>
                  
                  <div class="col s4 orange darken-3">
                    <div class="input-field">
                    <label for="sb2A" class="white-text">Attack</label>
                    <input class="white-text" type="number" v-model="sb2.attack">
                  </div>
                  </div>
                  <div class="col s4"><a @click="battleManual({name: 'stamina', type: 'physical', power: 0, position: 0})" class="btn waves-light waves-effect blue">{{sb2.stamina}}</a></div>
                  <div class="col s4"><a @click="battleManual({name: 'defense', type: 'physical', power: 0, position: 1})" class="btn waves-light waves-effect green">{{sb2.defense}}</a></div>
                  <div class="col s4"><a @click="battleManual({name: 'attack', type: 'physical', power: 0, position: 2})" class="btn waves-light waves-effect orange">{{sb2.attack}}</a></div>
                </div>
                <div class="row">
                  <div class="col s4 blue darken-3">
                    <div class="input-field">
                    <label class="white-text">Water</label>
                    <input class="white-text" type="number" v-model="sb2.water">
                  </div>
                  </div>
                  <div class="col s4 green darken-3">
                    <div class="input-field">
                    <label class="white-text">Earth</label>
                    <input class="white-text" type="number" v-model="sb2.earth">
                  </div>
                  </div>
                  <div class="col s4 orange darken-3">
                    <div class="input-field">
                    <label class="white-text">Lightning</label>
                    <input class="white-text" type="number" v-model="sb2.lightning">
                  </div>
                  </div>
                  <div class="col s4"><a @click="battleManual({name: 'water', type: 'magical', power: 0, position: 3})" class="btn waves-light waves-effect blue">{{sb2.water}}</a></div>
                  <div class="col s4"><a @click="battleManual({name: 'earth', type: 'magical', power: 0, position: 4})" class="btn waves-light waves-effect green">{{sb2.earth}}</a></div>
                  <div class="col s4"><a @click="battleManual({name: 'lightning', type: 'magical', power: 0, position: 5})" class="btn waves-light waves-effect orange">{{sb2.lightning}}</a></div>
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col s12 center">
                <h5 class="white-text">Battle Sim Count</h5>
                <input class="white-text" type="number" v-model="simCount">
                    <button class="btn" @click="battle()" v-if="!simulating">Simulate</button>
                    <div class="progress" v-if="simulating">
                        <div class="indeterminate"></div>
                    </div>
            </div>
        </div>
        <div class="row">
            <h5 class="white-text">Results</h5>
            <div class="col s6 center">
                <h5 class="white-text">Stat Build One Victory</h5>
                <span class="flow-text white-text" v-text="sb1Wins"></span>
                
            </div>
            <div class="col s6 center">
                <h5 class="white-text">Stat Build Two Victory</h5>
                <span class="flow-text white-text" v-text="sb2Wins"></span>
                
            </div>
            <div class="col s4 center">
                <h5 class="white-text">Stat Build One Win %</h5>
                <span class="flow-text white-text">{{sb1percent}}%</span>
                
            </div>
            <div class="col s4 center">
                <h5 class="white-text">Tie %</h5>
                <span class="flow-text white-text">{{tiesPercent}}%</span>
                
            </div>
            <div class="col s4 center">
                <h5 class="white-text">Stat Build Two Win %</h5>
                <span class="flow-text white-text">{{sb2percent}}%</span>
                
            </div>
        </div>
    </div>
</template>

<script>

    import Skill from './Skill.vue';

    export default {
        components: {
          'skill': Skill
        },

        data() {
            return {
                simCount: 10000,
                battleCounter: 0,
                victory: 0,
                simulating: false,
                sb1Wins: 0,
                sb2Wins: 0,
                ties: 0,
                sbClassName: {
                  1: 'Warrior',
                  2: 'Warrior'
                },
                sb1: {
                  stamina: 5,
                  defense: 2,
                  attack: 3,
                  finesse: 5,
                  life: 10,
                  water: 0,
                  earth: 0,
                  lightning: 0,
                  //Temp Stat Hold Overflow stats from effects
                  staminaTemp: 0,
                  defenseTemp: 0,
                  attackTemp: 0,
                  finesseTemp: 0,
                  lifeTemp: 0,
                },
                sb2: {
                  stamina: 5,
                  defense: 2,
                  attack: 3,
                  finesse: 5,
                  life: 10,
                  water: 0,
                  earth: 0,
                  lightning: 0,
                  //Temp Stat Hold Overflow stats from effects
                  staminaTemp: 0,
                  defenseTemp: 0,
                  attackTemp: 0,
                  finesseTemp: 0,
                  lifeTemp: 0,
                }

            }
        },

        computed: {
                sb1percent: function () {
                    return Math.round((this.sb1Wins/this.battleCounter) * 100);
                },

                sb2percent: function () {
                    return Math.round((this.sb2Wins/this.battleCounter) * 100);
                },

                tiesPercent: function () {
                  return Math.round((this.ties/this.battleCounter) * 100);
                },
        },

        methods: {
                /*
                * Actions
                */

                attackAction() {

                },//end Attack

                maneuverAction() {

                },//end Maneuver

                restAction() {

                },//end rest

                infuseMagic() {

                },//end infuse magic

                exertStamina() {

                },//end exertStamina

                quickClass(statbuild, classId, sbNumber) {
                  //stat caps for later use when leveling classes
                  let basePhysicalStatCap = 5;
                  let baseMagicalStatCap = 3;

                  for (let property in statbuild) {
                          if (statbuild.hasOwnProperty(property)) {
                            statbuild[property] = 0;
                          }
                      }

                  switch (classId) {
                    case 0:
                      this.sbClassName[sbNumber] = 'Warrior';
                      statbuild.stamina = basePhysicalStatCap;
                      statbuild.defense = basePhysicalStatCap;
                      statbuild.attack = basePhysicalStatCap;
                    break;
                    case 1:
                      this.sbClassName[sbNumber] = 'Assassin';
                      statbuild.stamina = basePhysicalStatCap;
                      statbuild.defense = basePhysicalStatCap;
                      statbuild.lightning = baseMagicalStatCap;
                    break;
                    case 2:
                      this.sbClassName[sbNumber] = 'Warden';
                      statbuild.stamina = basePhysicalStatCap;
                      statbuild.earth = baseMagicalStatCap;
                      statbuild.attack = basePhysicalStatCap;
                    break;
                    case 3:
                      this.sbClassName[sbNumber] = 'Mender';
                      statbuild.water = baseMagicalStatCap;
                      statbuild.defense = basePhysicalStatCap;
                      statbuild.attack = basePhysicalStatCap;
                    break;
                    case 4:
                      this.sbClassName[sbNumber] = 'Astromancer';
                      statbuild.stamina = basePhysicalStatCap;
                      statbuild.earth = baseMagicalStatCap;
                      statbuild.lightning = baseMagicalStatCap;
                    break;
                    case 5:
                      this.sbClassName[sbNumber] = 'Warlock';
                      statbuild.water = baseMagicalStatCap;
                      statbuild.defense = basePhysicalStatCap;
                      statbuild.lightning = baseMagicalStatCap;
                    break;
                    case 6:
                      this.sbClassName[sbNumber] = 'Druid';
                      statbuild.water = baseMagicalStatCap;
                      statbuild.earth = baseMagicalStatCap;
                      statbuild.attack = basePhysicalStatCap;
                    break;
                    case 7:
                      this.sbClassName[sbNumber] = 'Mage';
                      statbuild.water = baseMagicalStatCap;
                      statbuild.earth = baseMagicalStatCap;
                      statbuild.lightning = baseMagicalStatCap;
                    break;
                  }//end switch
                },//end quick class

                battleManual(sb1Action) {
                  this.victory = 0;
                  if (this.sb1[sb1Action.name] > 0) {
                    let sb2Action = this.getRandomAction(0,5, this.sb2);
                    this.compareActions(sb1Action, sb2Action);
                    this.victoryCheck(this.sb1, this.sb2);
                  } else {
                    console.log('Cannot perform this action');
                  }

                },//end battleManual

                battle() {

                    this.simulating = true;

                    this.battleCounter = 0;
                    this.sb1Wins = 0;
                    this.sb2Wins = 0;
                    this.ties = 0;

                     // let sb1Start = this.sb1;
                     // let sb2Start = this.sb2;
                    let sb1Start = {};
                    let sb2Start = {};

                     Object.assign(sb1Start, this.sb1);
                     Object.assign(sb2Start, this.sb2);


                    while (this.battleCounter < this.simCount) {
                        
                        // this.sb1 = sb1Start;
                        // this.sb2 = sb2Start;

                        Object.assign(this.sb1, sb1Start);
                        Object.assign(this.sb2, sb2Start);

                        this.victory = 0;

                        while (this.victory == 0) {
                          //monster selects random stat
                          let sb1Action = this.getRandomAction(0,5, this.sb1);
                          let sb2Action = this.getRandomAction(0,5, this.sb2);


                          this.compareActions(sb1Action, sb2Action);
                          this.victoryCheck(this.sb1, this.sb2);

                      }//end while
                      // console.log('------------------------------------');
                    this.battleCounter += 1;

                  }//end simCount while

                    // this.sb1 = sb1Start;
                    // this.sb2 = sb2Start;

                    Object.assign(this.sb1, sb1Start);
                    Object.assign(this.sb2, sb2Start);

                    this.simulating = false;
                    // console.log('------------------------------------');
                    // console.log('------------------------------------');
                    // console.log('------------------------------------');



                },//end battle

            getRandomAction(min, max, statbuild) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    let random = Math.floor(Math.random() * (max - min + 1)) + min;

                    let randomStat = this.selectStat(random);

                    if (statbuild[randomStat.name] > 0) {
                      return randomStat;
                    } else {
                      return this.getRandomAction(0,5, statbuild);
                    }

                  }, //end getRandom action

                selectStat(action) {
                  switch (action) {
                    case 0:
                      return {name: 'stamina', type: 'physical', power: 0, position: 0};
                    break;
                      
                    case 1:
                      return {name: 'defense', type: 'physical', power: 0, position: 1};
                    break;

                    case 2:
                      return {name: 'attack', type: 'physical', power: 0, position: 2};
                    break;
                      
                    case 3:
                      return {name: 'water', type: 'magical', power: 0, position: 3};
                    break;

                    case 4:
                      return {name: 'earth', type: 'magical', power: 0, position: 4};
                    break;

                    case 5:
                      return {name: 'lightning', type: 'magical', power: 0, position: 5};
                    break;
                  }
                }, //end selectStat


                victoryCheck(statbuild1, statbuild2) {
                  if (statbuild2.stamina <= 0 && statbuild2.defense <= 0 && statbuild2.attack <= 0 
                      && statbuild2.water <= 0 && statbuild2.earth <= 0 && statbuild2.lightning <= 0
                        && statbuild1.stamina <= 0 && statbuild1.defense <= 0 && statbuild1.attack <= 0 
                            && statbuild1.water <= 0 && statbuild1.earth <= 0 && statbuild1.lightning <= 0) {

                    this.victory = 1;
                    // console.log('The Stat Builds Tie');
                    this.ties += 1;

                  } else if (statbuild2.stamina <= 0 && statbuild2.defense <= 0 && statbuild2.attack <= 0 
                      && statbuild2.water <= 0 && statbuild2.earth <= 0 && statbuild2.lightning <= 0) {
                          this.victory = 1;
                          this.sb1Wins += 1;
                          // console.log('Stat Build One Wins!');

                        } else if (statbuild1.stamina <= 0 && statbuild1.defense <= 0 && statbuild1.attack <= 0 
                            && statbuild1.water <= 0 && statbuild1.earth <= 0 && statbuild1.lightning <= 0) {
                            this.victory = 1;
                            this.sb2Wins += 1;
                            // console.log('Stat Build Two Wins!');
                        } else {
                            this.victory = 0;
                        }
                }, //end victory check

        }, // end methods


        mounted() {
          //Initialize Dropdown
          $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrainWidth: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false, // Displays dropdown below the button
                alignment: 'left', // Displays dropdown with edge aligned to the left of button
                stopPropagation: false // Stops event propagation
              }
            );
        }, //end mounted
    }
</script>

<style>

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0
    }
</style>