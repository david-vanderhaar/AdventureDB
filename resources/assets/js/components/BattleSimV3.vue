<template>
    <div class="container">
        <div class="row">
            <h3 class="white-text">Battle Simulation - Version 3</h3>
        </div>
        <div class="row">
            <div class="col s6">
                <h5 class="white-text">Stat Build One</h5>
                <h5 class="white-text">{{sbClassName[1]}}</h5>
                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' data-activates='dropdown1'>Quick Class</a>

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
                  <div class="col s4" v-if="sb1.stamina > 0">
                    <div class="input-field">
                    <label for="sb1S" class="white-text">Stamina</label>
                    <input id="sb1S" class="white-text" type="number" v-model="sb1.stamina" active>
                  </div>
                  </div>
                  <div class="col s4" v-if="sb1.water > 0">
                    <div class="input-field">
                    <label class="white-text">Water</label>
                    <input class="white-text" type="number" v-model="sb1.water">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb1.defense > 0">
                    <div class="input-field">
                    <label for="sb1D" class="white-text">Defense</label>
                    <input class="white-text" type="number" v-model="sb1.defense">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb1.earth > 0">
                    <div class="input-field">
                    <label class="white-text">Earth</label>
                    <input class="white-text" type="number" v-model="sb1.earth">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb1.attack > 0">
                    <div class="input-field">
                    <label for="sb1A" class="white-text">Attack</label>
                    <input class="white-text" type="number" v-model="sb1.attack">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb1.lightning > 0">
                    <div class="input-field">
                    <label class="white-text">Lightning</label>
                    <input class="white-text" type="number" v-model="sb1.lightning">
                  </div>
                  </div>
                </div>
            </div>
            <div class="col s6">
                <h5 class="white-text">Stat Build Two</h5>
                <h5 class="white-text">{{sbClassName[2]}}</h5>

                <!-- Dropdown Trigger -->
                <a class='dropdown-button btn' data-activates='dropdown2'>Quick Class</a>

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
                  <div class="col s4" v-if="sb2.stamina > 0">
                    <div class="input-field">
                    <label for="sb2S" class="white-text">Stamina</label>
                    <input id="sb2S" class="white-text" type="number" v-model="sb2.stamina" active>
                  </div>
                  </div>
                  <div class="col s4" v-if="sb2.water > 0">
                    <div class="input-field">
                    <label class="white-text">Water</label>
                    <input class="white-text" type="number" v-model="sb2.water">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb2.defense > 0">
                    <div class="input-field">
                    <label for="sb2D" class="white-text">Defense</label>
                    <input class="white-text" type="number" v-model="sb2.defense">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb2.earth > 0">
                    <div class="input-field">
                    <label class="white-text">Earth</label>
                    <input class="white-text" type="number" v-model="sb2.earth">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb2.attack > 0">
                    <div class="input-field">
                    <label for="sb2A" class="white-text">Attack</label>
                    <input class="white-text" type="number" v-model="sb2.attack">
                  </div>
                  </div>
                  <div class="col s4" v-if="sb2.lightning > 0">
                    <div class="input-field">
                    <label class="white-text">Lightning</label>
                    <input class="white-text" type="number" v-model="sb2.lightning">
                  </div>
                  </div>
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
    export default {
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
                  defense: 5,
                  attack: 5,
                  water: 0,
                  earth: 0,
                  lightning: 0,
                },
                sb2: {
                  stamina: 5,
                  defense: 5,
                  attack: 5,
                  water: 0,
                  earth: 0,
                  lightning: 0,
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

                compareActions(action1, action2) {
                  //Initialize find distance vars
                  let actionDistance = 0;

                  let action1Measure = action1.position;

                  while (action1Measure != action2.position) {
                    
                      if ((action1Measure + 1) > 5) { //check if action1Measure needs to wrap back around to 0 in the circle of actions
                        action1Measure = 0;
                      } else {
                        action1Measure += 1;
                      }
                      actionDistance += 1;                    
 
                  }

                  //we have finished calculatin action distance, we can now determine what happens
                  //put actionDistance switch here                  

                  //Transform Power 
                  if (action1.type == 'physical') {
                    action1.power = 1;
                  } else if (action1.type == 'magical'){
                    // action1.power = this.sb1[action1.name];
                    action1.power = 2;
                  }

                  if (action2.type == 'physical') {
                    action2.power = 1;
                  } else if (action2.type == 'magical'){
                    // action2.power = this.sb2[action2.name];
                    action2.power = 2;
                  }

                  //stamina->defense->attack->water->earth->lightning->
                  switch (actionDistance) { //relative to action1
                    case 0:
                      //It's a tie

                      //Exchange of Power
                      this.sb1[action1.name] -= action2.power;
                      this.sb2[action2.name] -= action1.power;

                      //Self Harm
                      // this.sb1[action1.name] -= action1.power;
                      // this.sb2[action2.name] -= action2.power;

                      //Arbitrary Loss
                      // this.sb1[action1.name] -= 1;
                      // this.sb2[action2.name] -= 1;
                    break;

                    case 1:
                      //It's a win
                      this.sb2[action2.name] -= action1.power;
                    break;

                    case 2:
                      //It's a loss
                      this.sb1[action1.name] -= action2.power;
                    break;

                    case 3:
                      //It's a tie

                      this.sb1[action1.name] -= action2.power;
                      this.sb2[action2.name] -= action1.power;

                      // this.sb1[action1.name] -= action1.power;
                      // this.sb2[action2.name] -= action2.power;

                      // this.sb1[action1.name] -= 1;
                      // this.sb2[action2.name] -= 1;
                    break;
                    case 4:
                      //It's a win
                      this.sb2[action2.name] -= action1.power;
                    break;

                    case 5:
                      //It's a loss
                      this.sb1[action1.name] -= action2.power;
                    break;

                  }

                  // console.log(action1.name, '||', action2.name);
                  // console.log(actionDistance);
                  // console.log('s: ' + this.sb1.stamina, 'd: ' + this.sb1.defense, 'a: ' + this.sb1.attack, 'w: ' + this.sb1.water, 'e: ' + this.sb1.earth, 'l: ' + this.sb1.lightning);
                  // console.log('s: ' + this.sb2.stamina, 'd: ' + this.sb2.defense, 'a: ' + this.sb2.attack, 'w: ' + this.sb2.water, 'e: ' + this.sb2.earth, 'l: ' + this.sb2.lightning);

                }, //end compareActions


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