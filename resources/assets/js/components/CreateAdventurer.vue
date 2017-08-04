<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="center red-text text-darken-4">A New Adventurer</h2>
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
                <div class="input-field col s4">
                  <i class="material-icons prefix red-text text-darken-4">directions_run</i>
                  <input v-model="newAdventurer.stamina" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.stamina)" id="stamina" type="number" class="validate ">
                  <label  class="" for="stamina">Stamina</label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix red-text text-darken-4">brightness_5</i>
                  <input v-model="newAdventurer.defense" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.defense)" id="defense" type="number" class="validate ">
                  <label  class="" for="defense">Defense</label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix red-text text-darken-4">gavel</i>
                  <input v-model="newAdventurer.attack" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.attack)" id="attack" type="number" class="validate ">
                  <label  class="" for="attack">Attack</label>
                </div>
              </div>
              <div class="row" v-if="created != true">
                  <div class="col s12 center">
                      <a class="btn red darken-4" type="number" v-text="statMax"></a>
                  </div>
              </div>
              
            </div>
            <div class="col s12 red">
              <div class="row">
                  <br>
                      <button class="btn green" v-if="created != true" @click="storeAdventurer()">Create</button>
                  
                  
                    <router-link to="/" v-if="created == true"><button class="btn">View Adventurers</button></router-link>
                  
                  
                    <router-link to="/" v-if="created == false"><button class="btn">Back to the Tavern</button></router-link>
                  
                  
                    <button class="btn green" v-if="created == true" @click="created = false;">Hire Another Adventurer</button>
                  
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
                return (parseInt(stat) + this.statMax);
            },
        },

        created() {

        },
    }
</script>
