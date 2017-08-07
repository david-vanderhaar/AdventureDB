<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="center white-text text-darken-4">A New Adventurer</h2>
            </div>
        </div>
        <div class="row grey lighten-4">
            <div class="col s12">
              <div class="row"  v-if="created != true">
                <div class="input-field col s12">
                  <i class="material-icons prefix red-text text-darken-4">account_circle</i>
                  <input v-model="newAdventurer.name" id="name" type="text" class="validate " required>
                  <label  class="" for="name">Name</label>
                </div>
              </div>
              <div class="row" v-if="created != true">
                <div class="col s4">
                  <div class="row center">
                    <i class="material-icons prefix green-text text-darken-4">directions_run</i>
                    <p class="flow-text">Stamina</p>
                  </div>
                  <div class="row center">
                    <button class="btn green darken-4 waves-effect" @click="increaseStat('stamina')">
                      <i class="material-icons white-text">expand_less</i>
                    </button>
                  </div>
                  <div class="row center"><button class="btn green" v-text="newAdventurer.stamina"></button></div>
                  <div class="row center">
                    <button class="btn green darken-4 waves-effect" @click="decreaseStat('stamina')">
                      <i class="material-icons white-text">expand_more</i>
                    </button>
                  </div>
                </div>
                <div class="col s4">
                  <div class="row center">
                    <i class="material-icons prefix blue-text text-darken-4">brightness_5</i>
                    <p class="flow-text">Defense</p>
                  </div>
                  <div class="row center">
                    <button class="btn blue darken-4 waves-effect"  @click="increaseStat('defense')">
                      <i class="material-icons white-text">expand_less</i>
                    </button>
                  </div>
                  <div class="row center"><button class="btn blue" v-text="newAdventurer.defense"></button></div>
                  <div class="row center">
                    <button class="btn blue darken-4 waves-effect" @click="decreaseStat('defense')">
                      <i class="material-icons white-text">expand_more</i>
                    </button>
                  </div>
                </div>
                <div class="col s4">
                  <div class="row center"> 
                    <i class="material-icons prefix orange-text text-darken-4">gavel</i>
                    <p class="flow-text">Attack</p>
                  </div>
                  <div class="row center">
                    <button class="btn orange darken-4 waves-effect" @click="increaseStat('attack')">
                      <i class="material-icons white-text">expand_less</i>
                    </button>
                  </div>
                  <div class="row center"><button class="btn orange" v-text="newAdventurer.attack"></button></div>
                  <div class="row center">
                    <button class="btn orange darken-4 waves-effect" @click="decreaseStat('attack')">
                      <i class="material-icons white-text">expand_more</i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row" v-if="created != true">
                  <div class="col s12 center">
                      <a class="btn red darken-4" type="number" v-text="statMax"></a>
                  </div>
              </div>
              
            </div>
            <div class="col s12 red">
              <div class="row center">
                  <br>
                    <button class="btn" v-if="created == false" @click="storeAdventurer()">Create</button>
                  
                    <button class="btn" v-if="created == true" @click="created = false;">Hire Another Adventurer</button>
              </div>
              <div class="row center">
                <br>
                  <router-link to="/" v-if="created == true"><button class="btn">Back to the Tavern</button></router-link>
                  
                  <router-link to="/" v-if="created == false"><button class="btn">Back to the Tavern</button></router-link>
              </div>
                    
                  
                  
                  
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                user: JSON.parse($("meta[name=auth-user]").attr('content')),

                newAdventurer: { //store adventure here, then pass to storeAdventurer call
                    name:'',
                    stamina: 1,
                    defense: 1,
                    attack: 1,
                    user_id: JSON.parse($("meta[name=auth-user]").attr('content')).id,
                },

                statMax: 12, //maximum alottment of stats to be allocated
                created: false, //control visibility of elements

            }
        },

        methods: {
            storeAdventurer() { //save adventurer to the database
              if (this.newAdventurer.name != ''){
                if(this.statMax >= 0){ //check for invalid stats
                 axios.post('/api/adventurer', this.newAdventurer)
                .then((response) => { 
                    console.log(response.data);
                    this.created = true;
                    Materialize.toast(this.newAdventurer.name + ' is ready for adventure!', 4000) // alert the user to success
                    this.newAdventurer = { //reset form fields
                      name:'',
                      stamina: 1,
                      defense: 1,
                      attack: 1,
                      user_id: JSON.parse($("meta[name=auth-user]").attr('content')).id,
                    }
                    
                })
                .catch((error) => {
                    console.log(error);
                });
              } else {
                Materialize.toast(this.newAdventurer.name + ' has used too many stat points!', 4000);
                Materialize.toast('Reallocate a few point please!', 4000) // alert the user to invalid stat allotment
              }
              } else {
                Materialize.toast('Don\'t hire a nameless adventurer, that\'s dangerous!', 4000) // alert the user to success
              }
            },

            updateStatMax() { //update the statMax display input
                if (this.statMax >= 0) {
                    this.statMax = (15 - this.newAdventurer.stamina - this.newAdventurer.defense - this.newAdventurer.attack);
                } else {
                    alert('You have reached this adventurer\'s limit.');
                }
            },

            updateInputMax(stat) { //update max on stat inputs to prevent exceeding statMax
                if (this.statMax >= 0) {
                  return (parseInt(stat) + this.statMax);
                }
            },

            increaseStat(stat) {
              
              switch(stat) {
                case 'stamina':
                  if ((this.newAdventurer.stamina + 1) <= (this.newAdventurer.stamina + this.statMax)) {
                    this.newAdventurer.stamina += 1;
                    this.updateStatMax();
                  } else {
                      Materialize.toast('You have reached this adventurer\'s limit.', 4000);
                  }
                  break;
                case 'defense':
                  if ((this.newAdventurer.defense + 1) <= (this.newAdventurer.defense + this.statMax)) {
                    this.newAdventurer.defense += 1;
                    this.updateStatMax();
                  } else {
                    Materialize.toast('You have reached this adventurer\'s limit.', 4000);
                  }
                  break;
                case 'attack':
                  if ((this.newAdventurer.attack + 1) <= (this.newAdventurer.attack + this.statMax)) {
                    this.newAdventurer.attack += 1;
                    this.updateStatMax();
                  } else {
                    Materialize.toast('You have reached this adventurer\'s limit.', 4000);
                  }
                  break;
              }
            },//end increaseStat

            decreaseStat(stat) {
              switch(stat) {
                case 'stamina':
                  if ((this.newAdventurer.stamina - 1) >= (1)) {
                    this.newAdventurer.stamina -= 1;
                    this.updateStatMax();
                  } else {
                      Materialize.toast('Everybody has some skill!', 4000);
                  }
                  break;
                case 'defense':
                  if ((this.newAdventurer.defense - 1) >= (1)) {
                    this.newAdventurer.defense -= 1;
                    this.updateStatMax();
                  } else {
                    Materialize.toast('Everybody has some skill!', 4000);
                  }
                  break;
                case 'attack':
                  if ((this.newAdventurer.attack - 1) >= (1)) {
                    this.newAdventurer.attack -= 1;
                    this.updateStatMax();
                  } else {
                    Materialize.toast('Everybody has some skill!', 4000);
                  }
                  break;
              }
            }, //end decreaseStat
        },

        created() {

        },
    }
</script>
