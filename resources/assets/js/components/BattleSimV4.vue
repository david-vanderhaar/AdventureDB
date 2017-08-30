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
                    <a class="btn-large btn waves-light waves-effect red">{{sb1.life + sb1.lifeTemp + sb1.lifeMagicTemp}}</a>
                  </div>
                  <div class="col s6 center">
                    <h5 class="white-text">Stamina</h5>
                    <a class="btn-large btn waves-light waves-effect purple">{{sb1.stamina + sb1.staminaTemp + sb1.staminaMagicTemp}}</a>
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
                        <button class="btn grey" @click="exertStamina(sb1, 'finesseTemp')"><i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="relaxStamina(sb1, 'finesseTemp')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4">
                        <a class="btn-large btn waves-light waves-effect blue">{{sb1EndTurn.finesse}}</a>
                        
                      </div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey" @click="infuseMagic(sb1, 'finesseMagicTemp', 'water')"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="defuseMagic(sb1, 'finesseMagicTemp', 'water')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 center">
                    <h5 class="white-text">Defense</h5>
                    <div class="row">
                      <div class="col s4">
                        <span class="white-text">Exert</span>
                        <button class="btn grey" @click="exertStamina(sb1, 'defenseTemp')"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="relaxStamina(sb1, 'defenseTemp')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4"><a class="btn-large btn waves-light waves-effect green">{{sb1EndTurn.defense}}</a></div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey" @click="infuseMagic(sb1, 'defenseMagicTemp', 'earth')"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="defuseMagic(sb1, 'defenseMagicTemp', 'earth')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                  <div class="col s12 center">
                    <h5 class="white-text">Attack</h5>
                    <div class="row">
                      <div class="col s4">
                        <span class="white-text">Exert</span>
                        <button class="btn grey" @click="exertStamina(sb1, 'attackTemp')"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="relaxStamina(sb1, 'attackTemp')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                      <div class="col s4">
                        <a class="btn-large btn waves-light waves-effect orange">{{sb1EndTurn.attack}}</a>
                        
                      </div>
                      <div class="col s4">
                        <span class="white-text">Infuse</span>
                        <button class="btn grey" @click="infuseMagic(sb1, 'attackMagicTemp', 'lightning')"> <i class="material-icons">keyboard_arrow_up</i></button>
                        <button class="btn grey" @click="defuseMagic(sb1, 'attackMagicTemp', 'lightning')"> <i class="material-icons">keyboard_arrow_down</i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row center">
                  <div class="col s12">
                    <!-- Dropdown Trigger -->
                    <button class="white-text dropdown-button btn-large" data-activates='dropdownAction'>Turn Action</button>
                    

                    <!-- Dropdown Structure -->
                    <ul id='dropdownAction' class='dropdown-content'>
                      <li><a @click="attackAction(sb1, sb1EndTurn, sb2, sb2EndTurn, true)">Attack</a></li>
                      <li><a @click="maneuverAction(sb1, sb1EndTurn, sb2, sb2EndTurn, true)">Maneuver</a></li>
                      <li><a @click="restAction(sb1, true)">Rest</a></li>
                    </ul>
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
                  <div class="col s6 red darken-3">
                    <div class="input-field">
                    <label for="sb1S" class="white-text">Life</label>
                    <input id="sb1S" class="white-text" type="number" v-model="sb2.life" selected>
                  </div>
                  </div>
                  <div class="col s6 purple darken-3">
                    <div class="input-field">
                    <label for="sb2S" class="white-text">Stamina</label>
                    <input id="sb2S" class="white-text" type="number" v-model="sb2.stamina" selected>
                  </div>
                  </div>
                  <div class="col s4 blue darken-3">
                    <div class="input-field">
                    <label for="sb2D" class="white-text">Finesse</label>
                    <input class="white-text" type="number" v-model="sb2.finesse">
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
                </div>
                <div class="row">
                  <div class="col s4 blue darken-1">
                    <div class="input-field">
                    <label class="white-text">Water</label>
                    <input class="white-text" type="number" v-model="sb2.water">
                  </div>
                  </div>
                  <div class="col s4 green darken-1">
                    <div class="input-field">
                    <label class="white-text">Earth</label>
                    <input class="white-text" type="number" v-model="sb2.earth">
                  </div>
                  </div>
                  <div class="col s4 orange darken-1">
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
                turn: 1,
                turnCount: 0,
                simulating: false,
                sb1Wins: 0,
                sb2Wins: 0,
                ties: 0,
                sbClassName: {
                  1: 'Warrior',
                  2: 'Warrior'
                },
                magicInfuseAmount: 4,
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
                  staminaMagicTemp: 0,
                  defenseMagicTemp: 0,
                  attackMagicTemp: 0,
                  finesseMagicTemp: 0,
                  lifeMagicTemp: 0,
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
                  staminaMagicTemp: 0,
                  defenseMagicTemp: 0,
                  attackMagicTemp: 0,
                  finesseMagicTemp: 0,
                  lifeMagicTemp: 0,
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

                sb1EndTurn: function () {
                  return {
                    stamina: this.sb1.stamina + this.sb1.staminaTemp + this.sb1.staminaMagicTemp,
                    defense: this.sb1.defense + this.sb1.defenseTemp + this.sb1.defenseMagicTemp,
                    attack: this.sb1.attack + this.sb1.attackTemp + this.sb1.attackMagicTemp,
                    finesse: this.sb1.finesse + this.sb1.finesseTemp + this.sb1.finesseMagicTemp,
                    life: this.sb1.life + this.sb1.lifeTemp + this.sb1.lifeMagicTemp
                  };
                },

                sb2EndTurn: function () {
                  return {
                    stamina: this.sb2.stamina + this.sb2.staminaTemp + this.sb2.staminaMagicTemp,
                    defense: this.sb2.defense + this.sb2.defenseTemp + this.sb2.defenseMagicTemp,
                    attack: this.sb2.attack + this.sb2.attackTemp + this.sb2.attackMagicTemp,
                    finesse: this.sb2.finesse + this.sb2.finesseTemp + this.sb2.finesseMagicTemp,
                    life: this.sb2.life + this.sb2.lifeTemp + this.sb2.lifeMagicTemp
                  };
                },
        },

        methods: {
                /*
                * Actions
                */

                attackAction(statbuild, statbuildEndTurn, target, targetEndTurn, endTurnBool) {
                  if (statbuild.stamina > 0) {
                    statbuild.stamina -= 1;
                    if (statbuildEndTurn.attack - targetEndTurn.defense > 0) {
                      if (targetEndTurn.defense < 0){ //check for negative defense
                        target.life -= (statbuildEndTurn.attack);
                        if (endTurnBool == true) { //end turn
                          this.endTurn();
                        }
                      } else {
                        target.life -= (statbuildEndTurn.attack - targetEndTurn.defense);
                        if (endTurnBool == true) { //end turn
                          this.endTurn();
                        }
                      }
                      
                    } else {
                      statbuild.stamina += 1;
                      console.log("Cannot get past enemy's defense");
                    }
                  } else {
                    console.log("Not enough Stamina");
                  }

                },//end Attack

                maneuverAction(statbuild, statbuildEndTurn, target, targetEndTurn, endTurnBool) {
                  if (statbuild.stamina > 0) {
                    statbuild.stamina -= 1;
                    target.defense -= statbuildEndTurn.finesse;

                    if (endTurnBool == true) {
                      this.endTurn();
                    }
                  } else {
                    console.log("Not enough Stamina");
                  }
                  
                },//end Maneuver

                restAction(statbuild, endTurnBool) {
                  statbuild.stamina += 1;
                  if (endTurnBool == true) {
                    this.endTurn();
                  }
                },//end rest

                sbActionPicker(statbuild, statbuildEndTurn, target, targetEndTurn) {

                  if (statbuild.stamina < 1) { //not enough stamina to act
                    this.restAction(statbuild, false);
                    console.log('ai rest');
                  } else if (statbuildEndTurn.attack > targetEndTurn.defense) {
                    this.attackAction(statbuild, statbuildEndTurn, target, targetEndTurn, false);
                    console.log('ai attack');
                  } else if (statbuildEndTurn.attack <= targetEndTurn.defense) {
                    this.maneuverAction(statbuild, statbuildEndTurn, target, targetEndTurn, false);
                    console.log('ai maneuver');
                  }
                },//end sbActionPicker

                endTurn() {
                  //user has picked action
                  this.victoryCheck(this.sb1, this.sb2);

                  //bot temp stats cleared
                  this.sb2.staminaTemp = 0;
                  this.sb2.staminaMagicTemp = 0;
                  this.sb2.defenseTemp = 0;
                  this.sb2.defenseMagicTemp = 0;
                  this.sb2.attackTemp = 0;
                  this.sb2.attackMagicTemp = 0;
                  this.sb2.finesseTemp = 0;
                  this.sb2.finesseMagicTemp = 0;
                  this.sb2.lifeTemp = 0;
                  this.sb2.lifeMagicTemp = 0;

                  //bot picks action
                  this.sbActionPicker(this.sb2, this.sb2EndTurn, this.sb1, this.sb1EndTurn);

                  //bot modifies stats
                  
                  this.victoryCheck(this.sb1, this.sb2);
                  
                  //user temp stats cleared
                  this.sb1.staminaTemp = 0;
                  this.sb1.staminaMagicTemp = 0;
                  this.sb1.defenseTemp = 0;
                  this.sb1.defenseMagicTemp = 0;
                  this.sb1.attackTemp = 0;
                  this.sb1.attackMagicTemp = 0;
                  this.sb1.finesseTemp = 0;
                  this.sb1.finesseMagicTemp = 0;
                  this.sb1.lifeTemp = 0;
                  this.sb1.lifeMagicTemp = 0;
                  console.log("Your turn.")
                },//end endTurn

                modifyStats(statbuild) {

                },//end modifyStats

                pickAction() {

                },//end pickAction

                infuseMagic(statbuild, statInfused, magicStatUsed) {
                  if (statbuild[magicStatUsed] > 0) { //check if magic stat is available
                    statbuild[statInfused] += this.magicInfuseAmount;
                    statbuild[magicStatUsed] -= 1;
                  } else {
                    console.log('Magic not available');
                  }
                },//end infuse magic

                defuseMagic(statbuild, statInfused, magicStatUsed) {
                  if (statbuild[statInfused] > 0) { //check if magic stat has been used available
                    statbuild[magicStatUsed] += 1;
                    statbuild[statInfused] -= this.magicInfuseAmount;
                  } else {
                    console.log('No magic to be restored');
                  }
                },//end defuse magic

                exertStamina(statbuild, statExerted) {
                  if (statbuild.stamina > 0) { //check if magic stat is available
                    statbuild[statExerted] += 1;
                    statbuild.stamina -= 1;
                  } else {
                    console.log('Stamina not available');
                  }
                },//end exertStamina

                relaxStamina(statbuild, statRelaxed) {
                  if (statbuild[statRelaxed] > 0) { //check if magic stat is available
                    statbuild.stamina += 1;
                    statbuild[statRelaxed] -= 1;
                  } else {
                    console.log('No stamina to be restored');
                  }
                },//end relaxStamina

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
                  if (statbuild1.life <= 0 && statbuild2.life <= 0) {

                    this.victory = 1;
                    console.log('The Stat Builds Tie');
                    this.ties += 1;

                  } else if (statbuild2.life <= 0) {
                          this.victory = 1;
                          this.sb1Wins += 1;
                          console.log('Stat Build One Wins!');

                        } else if (statbuild1.life <= 0) {
                            this.victory = 1;
                            this.sb2Wins += 1;
                            console.log('Stat Build Two Wins!');
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