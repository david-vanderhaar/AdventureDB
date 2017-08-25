<template>
    <div class="row">
        <div class="col s12">
          <div class="card darken-3" v-bind:class="{ blue: statType == 'stamina' || statType == 'water', 
                                                     green: statType == 'defense' || statType == 'earth',
                                                     orange: statType == 'attack' || statType == 'lightning'}">
            <div class="card-content white-text">
              <span class="card-title">{{ title }}</span>
              <div class="row">
                <div class="col s6">
                  <button class="btn" v-bind:class="{ teal: statOnePurchased, grey: !statOnePurchased }" @click="spendStatOnSkill(statOnePurchased, 1)">{{ statOne }}</button>
                </div>
                <div class="col s6">
                  <button class="btn" v-bind:class="{ teal: statTwoPurchased, grey: !statTwoPurchased }" @click="spendStatOnSkill(statTwoPurchased, 2)">{{ statTwo }}</button>
                </div>
              </div>
              <slot></slot>
            </div>
            <div class="card-action center">
                <transition name="fade">
                    <button class="btn white-text" v-show="skillActive" @click="clickHandler()">Use Skill</button>
                </transition>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        props: [
                    'title',
                    'statOne',
                    'statTwo',
                    'statType',
                    'actionObject',

                ],
        data() {
            return {
                statOnePurchased: false, //represents if the required stats has been selected
                statTwoPurchased: false, //represents if the required stats has been selected
            }
        },//end data

        computed: {
            skillActive: function() { //determines whether this skill is active
                if (this.statOnePurchased && this.statTwoPurchased == true) {
                    return true;
                } else {
                    return false;
                }
            }
        },//end computed
        methods: {
            clickHandler() {
                this.$parent.battleManualWithSkills(this.actionObject);
                //reset stat Purchases
                this.statOnePurchased = false;
                this.statTwoPurchased = false;
            },//end clickHandler
            spendStatOnSkill(skillStatPurchased, skillStatPurchasedId) {
                    switch (skillStatPurchasedId) { //checks whether this is statOne or statTwo
                        case 1:

                            if (!skillStatPurchased && this.$parent.sb1[this.statOne] > 0) { //toggles whether the required stat has been selected (player spend stat point)
                                skillStatPurchased = true;
                                this.statOnePurchased = skillStatPurchased;
                                this.$parent.sb1[this.statOne] -= 1;
                            } else if (skillStatPurchased) {
                                skillStatPurchased = false;
                                this.statOnePurchased = skillStatPurchased;
                                this.$parent.sb1[this.statOne] += 1;
                                
                            }

                        break;

                        case 2: 
                            if (!skillStatPurchased && this.$parent.sb1[this.statTwo] > 0) {
                                skillStatPurchased = true;
                                this.statTwoPurchased = skillStatPurchased;
                                this.$parent.sb1[this.statTwo] -= 1;
                            } else if (skillStatPurchased) {
                                skillStatPurchased = false;
                                this.statTwoPurchased = skillStatPurchased;
                                this.$parent.sb1[this.statTwo] += 1;
                                
                            }
                        break;                        
                    }//end switch
                
            },//end spendStatOnSkill
        },//end methods
        mounted() {
            console.log('Component mounted.');
        }
    }
</script>