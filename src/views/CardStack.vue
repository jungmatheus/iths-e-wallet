<template>
    <div class="position">
        <div>
            <img v-bind:src="require(`../assets/${path}.svg`)" class="card1" width="55%" 
            v-on:click="exportPath">
            <img src="../assets/FLOWER CARD.svg" class="card2"  width="55%"  v-on:click="exportPath2">
            <img src="../assets/EVILCORP CARD.svg" class="card3" width="55%"  v-on:click="exportPath3" >
        </div>
    </div>
</template>

<script>
export default {


    data() { return {
       path: "bitcoin card",
       path2: "FLOWER CARD",
       path3: "EVILCORP CARD"
    }},

    methods: {
        exportPath() {

            this.$emit('exportPath', this.path)
        },

        exportPath2() {

            this.$emit('exportPath', this.path2)
        },

        exportPath3() {

            this.$emit('exportPath', this.path3)
        },

        
    }

  


}
</script>

<style scoped>

.position {
    display:flex;
    justify-content:center;
}

div {
    margin-top:10px;
    display:grid;
    grid-template-columns: 500px;
    grid-template-rows:5vh 5vh 30vh;

}

.card1 { 
    grid-row:1;
    grid-column:1;
    justify-self:center;
    
}

.card2 { 
    grid-row:2;
    grid-column:1;
    justify-self:center;
    
}

.card3 {
    grid-row:3;
    grid-column:1;
    justify-self:center;
    z-index:10;
    
}




</style>