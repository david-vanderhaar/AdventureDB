<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="flow-text center">Create A New Adventurer</h2>
            </div>
        </div>
        <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input v-model="newAdventurer.name" id="name" type="text" class="validate">
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
              <div class="row">
                  <div class="col s12 center">
                      <button class="btn red" type="number" v-text="statMax"></button>
                  </div>
              </div>
            </form>
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

                //maximum alottment of stats to be allocated
                statMax: 12,

            }
        },

        methods: {
            storeAdventurer() { //save adventurer to the database
                 axios.post('/api/adventurer', this.newAdventurer)
                .then((response) => { 
                    console.log(response.data);
                });
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
