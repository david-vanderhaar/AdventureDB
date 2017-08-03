<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="flow-text center">Your Adventurers</h2>
            </div>
        </div>
        <div class="row grey">
            <div class="col s12 center">  
                    <router-link to="/create-adventurer"><button class="btn">Create a New Adventurer</button></router-link>
            </div>
        </div>
        <div class="row grey" v-for="adventurer in adventurers">
            <div class="col s12 l8 center">  
                    <button class="btn">{{adventurer.name}}</button>
            </div>
            <div class="col s12 l4 center">
                <button class="btn grey darken-3" @click="deleteAdventurer(adventurer.id)"><i class="material-icons">delete</i></button>
                <button class="btn yellow darken-3"><i class="material-icons">info</i></button>
                <button class="btn red" @click="embarkAdventurer(adventurer.id)">Embark</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                adventurers: [],
            }
        },

        methods: {
            getAdventurers() {
                 axios.get('/api/adventurer')
                .then((response) => { 
                    this.adventurers = response.data; //capture all user's adventurers
                    console.log(response.data);

                    this.disembarkAdventurers(this.adventurers); //deactivate all active adventures for clean slate
                });
            }, //end getAdventurers

            deleteAdventurer(adventurerId) {
                axios.delete('/api/adventurer/'+adventurerId)
                .then((response) => { 
                    
                    this.getAdventurers(); //on succesfull delete, refresh adventurers
                    Materialize.toast(response.data.name + ' has retired, off to start the final journey', 4000);
                })
                .catch((error) => {
                    Materialize.toast(response.data.name + ' is not yet ready to lay down the spirt of adventure!', 4000);
                    Materialize.toast('We are having server issues, try again soon!', 4000);
                });
            }, //end deleteAdventurers

            embarkAdventurer(id) {
                axios.patch('/api/adventurer/activate/'+id)
                .then((response) => { 
                    console.log('embark')
                    this.$router.push('/map-dashboard'); //after successful activation, route changes to map dash
                });
            }, //end embarkAdventurer

            disembarkAdventurers(adventurers) {
                adventurers.forEach((adventurer) => {
                    axios.patch('/api/adventurer/deactivate/'+adventurer.id)
                        .then((response) => { 
                            Materialize.toast(adventurer.name + ' is here at the tavern, ready to journey', 4000);
                        });
                });
            }, //end disembarkAdventurers
        },

        mounted() {
            this.getAdventurers();
        }
    }
</script>
