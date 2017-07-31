<template>
    <div class="container">
        <div class="row">
            <h3>Your Adventurers</h3>
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
