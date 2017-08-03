<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="flow-text center">Create A New Adventurer</h2>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
              <div class="row"  v-if="created != true">
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input v-model="newAdventurer.name" id="name" type="text" class="validate" required>
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix">phone</i>
                  <input v-model="newAdventurer.stamina" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.stamina)" id="stamina" type="number" class="validate">
                  <label for="stamina">Stamina</label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix">phone</i>
                  <input v-model="newAdventurer.defense" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.defense)" id="defense" type="number" class="validate">
                  <label for="defense">Defense</label>
                </div>
                <div class="input-field col s4">
                  <i class="material-icons prefix">phone</i>
                  <input v-model="newAdventurer.attack" @change="updateStatMax()" min="1" v-bind:max="updateInputMax(newAdventurer.attack)" id="attack" type="number" class="validate">
                  <label for="attack">Attack</label>
                </div>
              </div>
              <div class="row" v-if="created != true">
                  <div class="col s12 center">
                      <a class="btn red" type="number" v-text="statMax"></a>
                  </div>
              </div>
              <div class="row">
                  <div class="col s12 center">
                      <button class="btn green" v-if="created != true" @click="storeAdventurer()">Create</button>
                  </div>
                  <div class="col s12 center">
                    <router-link to="/" v-if="created == true"><button class="btn green">View Adventurers</button></router-link>
                  </div>
                  <div class="col s12 center">
                    <router-link to="/" v-if="created == false"><button class="btn green darken-2">Back to the Tavern</button></router-link>
                  </div>
                  <div class="col s12 center">
                    <button class="btn green darken-2" v-if="created == true" @click="created = false;">Hire Another Adventurer</button>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newAdventurer: { //store adventure here, then pass to storeAdventurer call
                    name:'',
                    stamina: 1,
                    defense: 1,
                    attack: 1,
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
