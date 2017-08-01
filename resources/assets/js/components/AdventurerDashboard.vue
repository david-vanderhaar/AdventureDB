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
                <button class="btn red">Embark</button>
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
                    this.adventurers = response.data;
                    console.log(response.data);
                });
            },

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
            },
        },

        created() {
            this.getAdventurers();
        }
    }
</script>
