<template>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <h2 class="flow-text center">Your Adventurers</h2>
            </div>
        </div>
        <div class="row grey" v-for="adventurer in adventurers">
            <div class="col s12 l8 center">  
                    <button class="btn">{{adventurer.name}}</button>
            </div>
            <div class="col s12 l4 center">
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

        created() {
            axios.get('/api/adventurer')
                .then((response) => { 
                    this.adventurers = response.data;
                    console.log(response.data);
                });
        }
    }
</script>
