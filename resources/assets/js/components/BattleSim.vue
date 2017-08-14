<template>
    <div class="container">
        <div class="row">
            <h3 class="white-text">Battle Simulation</h3>
        </div>
        <div class="row">
            <div class="col s6">
                <h5 class="white-text">Stat Build One</h5>
                <input class="white-text" type="number" v-model="sb1S">
                <input class="white-text" type="number" v-model="sb1D">
                <input class="white-text" type="number" v-model="sb1A">
                
            </div>
            <div class="col s6">
                <h5 class="white-text">Stat Build Two</h5>
                <input class="white-text" type="number" v-model="sb2S">
                <input class="white-text" type="number" v-model="sb2D">
                <input class="white-text" type="number" v-model="sb2A">
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
                sb1S: 5,
                sb1D: 5,
                sb1A: 5,
                sb2S: 5,
                sb2D: 5,
                sb2A: 5,
                simCount: 10,
                battleCounter: 0,
                victory: 0,
                sb1Wins: 0,
                sb2Wins: 0,
                simulating: false,

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

                     let sb1SStart = this.sb1S;
                     let sb1DStart = this.sb1D;
                     let sb1AStart = this.sb1A;
                     let sb2SStart = this.sb2S;
                     let sb2DStart = this.sb2D;
                     let sb2AStart = this.sb2A;


                    while (this.battleCounter < this.simCount) {
                        
                        this.sb1S = sb1SStart;
                        this.sb1D = sb1DStart;
                        this.sb1A = sb1AStart;
                        this.sb2S = sb2SStart;
                        this.sb2D = sb2DStart;
                        this.sb2A = sb2AStart;

                        this.victory = 0;

                        while (this.victory == 0) {
                          //monster selects random stat
                          let sb1Action = this.getRandomAction(0,2, this.sb1S, this.sb1D, this.sb1A);
                          let sb2Action = this.getRandomAction(0,2, this.sb2S, this.sb2D, this.sb2A);


                          this.compareActions(sb1Action, sb2Action);


                          this.victoryCheck(this.sb1S, this.sb1D, this.sb1A, this.sb2S, this.sb2D, this.sb2A);
                      }//end while

                    this.battleCounter += 1;

                  }//end simCount while

                    this.sb1S = sb1SStart;
                    this.sb1D = sb1DStart;
                    this.sb1A = sb1AStart;
                    this.sb2S = sb2SStart;
                    this.sb2D = sb2DStart;
                    this.sb2A = sb2AStart;

                    this.simulating = false;

                },//end battle

            getRandomAction(min, max, stamina, defense, attack) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    let random = Math.floor(Math.random() * (max - min + 1)) + min;

                    switch (random) {
                      case 0:
                        if (stamina > 0) {
                          return 0;
                        } else {
                          return this.getRandomAction(0,2, stamina, defense, attack);
                        }

                        break;

                      case 1:
                        if (defense > 0) {
                          return 1;
                        } else {
                          return this.getRandomAction(0,2, stamina, defense, attack);
                        }

                        break;

                      case 2:
                        if (attack > 0) {
                          return 2;
                        } else {
                          return this.getRandomAction(0,2, stamina, defense, attack);
                        }

                        break;
                    }
                  }, //end getRandom action

                compareActions(adA, monA) {
                  if (adA == 0 && monA == 0) {
                    this.sb1S -= 1;
                    this.sb2S -= 1;

                  } else if (adA == 1 && monA == 1) {
                    this.sb1D -= 1;
                    this.sb2D -= 1;

                  } else if (adA == 2 && monA == 2) {
                    this.sb1A -= 1;
                    this.sb2A -= 1;

                  } else if (adA == 0 && monA == 1) {
                    this.sb2D -= 1;

                  } else if (adA == 0 && monA == 2) {
                    this.sb1S -= 1;

                  } else if (adA == 1 && monA == 0) {
                    this.sb1D -= 1;

                  } else if (adA == 1 && monA == 2) {
                    this.sb2A -= 1;

                  } else if (adA == 2 && monA == 0) {
                    this.sb2S -= 1;

                  } else if (adA == 2 && monA == 1) {
                    this.sb1A -= 1;

                  } else {
                    console.log('comparison error');
                  }

                }, //end compare actions

                victoryCheck(stamina1, defense1, attack1, stamina2, defense2, attack2) {
                  if (stamina2 == 0 && defense2 == 0 && attack2 == 0) {
                          
                          this.victory = 1;
                          this.sb1Wins += 1;

                        } else if (stamina1 == 0 && defense1 == 0 && attack1 == 0) {
                            this.victory = 1;
                            this.sb2Wins += 1;
                        } else {
                            this.victory = 0;
                        }
                }, //end victory check
        }, // end methods


        mounted() {
            
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