<template>
    <div class="container">
        <div class="row">
            <h3 class="white-text">Battle Simulation - Version 2</h3>
        </div>
        <div class="row">
            <div class="col s6">
                <h5 class="white-text">Stat Build One</h5>
                <div class="input-field">
                  <label for="sb1S" class="white-text">Stamina</label>
                  <input id="sb1S" class="white-text" type="number" v-model="sb1.stamina" active>
                </div>
                <div class="input-field">
                  <label for="sb1D" class="white-text">Defense</label>
                  <input class="white-text" type="number" v-model="sb1.defense">
                </div>
                <div class="input-field">
                  <label for="sb1A" class="white-text">Attack</label>
                  <input class="white-text" type="number" v-model="sb1.attack">
                </div>
                <div class="input-field">
                  <label class="white-text">Water</label>
                  <input class="white-text" type="number" v-model="sb1.water">
                </div>
                <div class="input-field">
                  <label class="white-text">Earth</label>
                  <input class="white-text" type="number" v-model="sb1.earth">
                </div>
                <div class="input-field">
                  <label class="white-text">Lightning</label>
                  <input class="white-text" type="number" v-model="sb1.lightning">
                </div>
                <div class="input-field">
                  <label class="white-text">Intuition</label>
                  <input class="white-text" type="number" v-model="sb1.intuition">
                </div>
                <div class="input-field">
                  <label class="white-text">Constitution</label>
                  <input class="white-text" type="number" v-model="sb1.constitution">
                </div>
                <div class="input-field">
                  <label class="white-text">Will Power</label>
                  <input class="white-text" type="number" v-model="sb1.willpower">
                </div>
                
            </div>
            <div class="col s6">
                <h5 class="white-text">Stat Build Two</h5>
                <div class="input-field">
                  <label for="sb2S" class="white-text">Stamina</label>
                  <input id="sb2S" class="white-text" type="number" v-model="sb2.stamina">
                </div>
                <div class="input-field">
                  <label for="sb2D" class="white-text">Defense</label>
                  <input class="white-text" type="number" v-model="sb2.defense">
                </div>
                <div class="input-field">
                  <label for="sb2A" class="white-text">Attack</label>
                  <input class="white-text" type="number" v-model="sb2.attack">
                </div>
                <div class="input-field">
                  <label class="white-text">Water</label>
                  <input class="white-text" type="number" v-model="sb2.water">
                </div>
                <div class="input-field">
                  <label class="white-text">Earth</label>
                  <input class="white-text" type="number" v-model="sb2.earth">
                </div>
                <div class="input-field">
                  <label class="white-text">Lightning</label>
                  <input class="white-text" type="number" v-model="sb2.lightning">
                </div>
                <div class="input-field">
                  <label class="white-text">Intuition</label>
                  <input class="white-text" type="number" v-model="sb2.intuition">
                </div>
                <div class="input-field">
                  <label class="white-text">Constitution</label>
                  <input class="white-text" type="number" v-model="sb2.constitution">
                </div>
                <div class="input-field">
                  <label class="white-text">Will Power</label>
                  <input class="white-text" type="number" v-model="sb2.willpower">
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
            <div class="col s12 center">
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
                simCount: 10,
                battleCounter: 0,
                victory: 0,
                simulating: false,
                sb1Wins: 0,
                sb2Wins: 0,
                sb1: {
                  stamina: 3,
                  defense: 3,
                  attack: 3,
                  water: 3,
                  earth: 3,
                  lightning: 3,
                  intuition: 3,
                  constitution: 3,
                  willpower: 3
                },
                sb2: {
                  stamina: 3,
                  defense: 3,
                  attack: 3,
                  water: 3,
                  earth: 3,
                  lightning: 3,
                  intuition: 3,
                  constitution: 3,
                  willpower: 3
                }

            }
        },

        computed: {
                sb2percent: function () {
                    return (this.sb2Wins/this.battleCounter);
                }
        },

        methods: {

                battle() {

                    this.simulating = true;

                    this.battleCounter = 0;
                    this.sb1Wins = 0;
                    this.sb2Wins = 0;

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
                          let sb1Action = this.getRandomAction(0,8, this.sb1);
                          let sb2Action = this.getRandomAction(0,8, this.sb2);


                          this.compareActions(sb1Action, sb2Action);
                          


                          this.victoryCheck(this.sb1, this.sb2);
                      }//end while

                    this.battleCounter += 1;

                  }//end simCount while

                    // this.sb1 = sb1Start;
                    // this.sb2 = sb2Start;

                    Object.assign(this.sb1, sb1Start);
                    Object.assign(this.sb2, sb2Start);

                    this.simulating = false;

                },//end battle

            getRandomAction(min, max, statbuild) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    let random = Math.floor(Math.random() * (max - min + 1)) + min;

                    switch (random) {
                      case 0:
                        if (statbuild.stamina > 0) {
                          return 0;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 1:
                        if (statbuild.defense > 0) {
                          return 1;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 2:
                        if (statbuild.attack > 0) {
                          return 2;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                        case 3:
                        if (statbuild.water > 0) {
                          return 3;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 4:
                        if (statbuild.earth > 0) {
                          return 4;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 5:
                        if (statbuild.lightning > 0) {
                          return 5;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                        case 6:
                        if (statbuild.intuition > 0) {
                          return 6;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 7:
                        if (statbuild.constitution > 0) {
                          return 7;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;

                      case 8:
                        if (statbuild.willpower > 0) {
                          return 8;
                        } else {
                          return this.getRandomAction(0,8, statbuild);
                        }

                        break;
                    }
                  }, //end getRandom action

                selectStat(action) {
                  switch (action) {
                    case 0:
                      return 'stamina';
                    break;
                      
                    case 1:
                      return 'defense';
                    break;

                    case 2:
                      return 'attack';
                    break;
                      
                    case 3:
                      return 'water';
                    break;

                    case 4:
                      return 'earth';
                    break;

                    case 5:
                      return 'lightning';
                    break;

                    case 6:
                      return 'intuition';
                    break;

                    case 7:
                      return 'constitution';
                    break;

                    case 8:
                      return 'willpower';
                    break;
                  }
                }, //end selectStat

                compareActions(action1, action2) {
                  //Initialize find distance vars
                  let actionDistance = 0;
                  let action1Measure = action1;

                  //Select Stats
                  let selectedStat1 = this.selectStat(action1);
                  let selectedStat2 = this.selectStat(action2);

                  while (action1Measure != action2) {
                    
                      if ((action1Measure + 1) > 8) { //check if action1Measure needs to wrap back around to 0 in the circle of actions
                        action1Measure = 0;
                      } else {
                        action1Measure += 1;
                      }
                      actionDistance += 1;                    
 
                  }

                  //we have finished calculatin action distance, we can now determine what happens
                  //put actionDistance switch here
                  // console.log('finished finding the action distance...', actionDistance);

                  switch (actionDistance) { //relative to action1
                    case 0:
                      //It's a balanced tie
                      this.sb1[selectedStat1] -= 1;
                      this.sb2[selectedStat2] -= 1;
                    break;

                    case 1:
                      //It's a balanced win
                      this.sb2[selectedStat2] -= 1;
                    break;

                    case 2:
                      //It's a balanced loss
                      this.sb1[selectedStat1] -= 1;
                    break;

                    case 3:
                      //It's a strong tie
                      this.sb1[selectedStat1] -= 1;
                      this.sb2[selectedStat2] -= 2;
                    break;

                    case 4:
                      //It's a strong win
                      this.sb2[selectedStat2] -= 2;
                    break;

                    case 5:
                      //It's a strong loss
                      this.sb1[selectedStat1] -= 2;
                    break;

                    case 6:
                      //It's a weak tie
                      this.sb1[selectedStat1] -= 2;
                      this.sb2[selectedStat2] -= 1;
                    break;

                    case 7:
                      //It's a weak win
                      this.sb2[selectedStat2] -= 1;
                    break;

                    case 8:
                      //It's a weak loss
                      this.sb1[selectedStat1] -= 2;
                    break;

                  }
                  // console.log(this.sb1, this.sb2);
                }, //end compareActions


                victoryCheck(statbuild1, statbuild2) {
                  if (statbuild2.stamina <= 0 && statbuild2.defense <= 0 && statbuild2.attack <= 0 
                      && statbuild2.water <= 0 && statbuild2.earth <= 0 && statbuild2.lightning <= 0
                        && statbuild2.intuition <= 0 && statbuild2.constitution <= 0 && statbuild2.willpower <= 0) {
                          
                          this.victory = 1;
                          this.sb1Wins += 1;

                        } else if (statbuild1.stamina <= 0 && statbuild1.defense <= 0 && statbuild1.attack <= 0 
                            && statbuild1.water <= 0 && statbuild1.earth <= 0 && statbuild1.lightning <= 0
                              && statbuild1.intuition <= 0 && statbuild1.constitution <= 0 && statbuild1.willpower <= 0) {
                            this.victory = 1;
                            this.sb2Wins += 1;
                        } else {
                            this.victory = 0;
                        }
                }, //end victory check
        }, // end methods


        mounted() {
            // this.compareActions(0,0);
            // this.compareActions(0,1);
            // this.compareActions(0,8);
            // this.compareActions(5,0);
            // this.compareActions(5,4);
            // this.compareActions(5,5);
            // this.compareActions(8,8);
            // this.compareActions(8,0);
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