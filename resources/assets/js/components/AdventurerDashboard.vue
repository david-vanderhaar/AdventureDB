<template>
    <div class="container">
        <div class="row">
            <div class="col s12 center">
                <i class="material-icons white-text text-darken-4 large">home</i>
            </div>
        </div>
        <div class="row">
            <div class="col s12 center">  
                    <router-link to="/create-adventurer"><button class="btn">Create a New Adventurer</button></router-link>
            </div>
        </div>
        <div class="row">
        <ul class="collapsible" data-collapsible="accordion">
            <li v-for="adventurer in adventurers">
              <div class="collapsible-header red darken-4"><h4 class="white-text">{{adventurer.name}}</h4></div>
              <div class="collapsible-body white">

                  <div class="row">
                      <div class="center col s6">
                          <div class="row"><p class="flow-text grey-text text-darken-4" style="text-decoration: overline underline;">Monsters Defeated</p></div>
                          <div class="row"><p class="flow-text grey-text text-darken-4">{{adventurer.monsters_defeated}}</p></div>
                      </div>
                      <div class="center col s6">
                          <div class="row"><p class="flow-text grey-text text-darken-4" style="text-decoration: overline underline;">Treasure Gained</p></div>
                          <div class="row"><p class="flow-text grey-text text-darken-4">{{adventurer.treasure}}</p></div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="row">
                          <div class="center col s4">
                                <div class="row"><p class="flow-text grey-text text-darken-4" style="text-decoration: overline underline;">Stamina</p></div>
                                <div class="row"><p class="flow-text grey-text text-darken-4">{{adventurer.stamina}}</p></div>
                            </div>
                          <div class="center col s4">
                                <div class="row"><p class="flow-text grey-text text-darken-4" style="text-decoration: overline underline;">Defense</p></div>
                                <div class="row"><p class="flow-text grey-text text-darken-4">{{adventurer.defense}}</p></div>
                            </div>
                          <div class="center col s4">
                                <div class="row"><p class="flow-text grey-text text-darken-4" style="text-decoration: overline underline;">Attack</p></div>
                                <div class="row"><p class="flow-text grey-text text-darken-4">{{adventurer.attack}}</p></div>
                            </div>
                      </div>
                  </div>
                  <div class="row">
                    <button class="btn grey darken-3" @click="deleteAdventurer(adventurer.id)"><i class="material-icons">delete</i></button>
                     <button class=" right btn red" @click="embarkAdventurer(adventurer.id)">Embark</button>
                  </div>
              </div>
            </li>
        </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                adventurers: [],
                user: JSON.parse($("meta[name=auth-user]").attr('content')),

            }
        },

        methods: {
            getAdventurers() {
                 axios.get('/api/adventurer/user/'+this.user.id)
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

            embarkAdventurer(id) { //set this adventurer to active
                axios.patch('/api/adventurer/activate/'+id)
                .then((response) => { 

                    this.$router.push('/map-dashboard'); //after successful activation, route changes to map dash
                })
                .catch((error) => {
                    Materialize.toast('Your adventurer was left at the tavern, go back and get them.', 4000);
                });
            }, //end embarkAdventurer

            disembarkAdventurers(adventurers) {
                adventurers.forEach((adventurer) => {
                    axios.patch('/api/adventurer/deactivate/'+adventurer.id)
                        .then((response) => { 

                        });
                });
            }, //end disembarkAdventurers
        },

        mounted() {
            $(document).ready(function(){
                $('.collapsible').collapsible();
              });
            this.getAdventurers();
        }
    }
</script>
