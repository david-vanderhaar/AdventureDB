<template>
    <div class="container">
        <div class="row">
            <h3>Your Adventurers</h3>
        </div>
        <div class="row" v-for="adventurer in adventurers">
            <div class="col s8">  
                    <button class="btn">{{adventurer.name}}</button>
            </div>
            <div class="col s2">
                <button class="btn yellow darken-3"><i class="material-icons">info</i></button>
            </div>
            <div class="col s2">
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
