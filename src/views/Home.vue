<template>
    <div class="wrapper">
        <div class="main">
            <Top/>
            <Maincard v-bind:mainCardPath="transCardPath" v-bind:switchMain="abc"/>
            <CardStack v-on:exportPath="exportPath" />
            <router-link to="/AddCard" tag="button">ADD A NEW CARD</router-link>
        </div>
    </div>
    
</template>

<script>

import Top from '../views/Top.vue' 
import Maincard from '../views/Maincard.vue'
import CardStack from '../views/CardStack.vue'

export default {


    data() { return {
        
        transCardPath: "",
        abc: false
    }},

    components: {
        Top: Top,
        Maincard: Maincard,
        CardStack: CardStack
    },

    methods: {
        exportPath(payload) {
            this.transCardPath = payload;
            this.abc = true;
            console.log("alright")
        }
    }

    

}
</script>

<style scoped>

div.main {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:500px;
    height:650px;
    background-color:white;
    
}

div.wrapper {
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:grey;
    border-style:solid;
    border-color:grey;
}





</style>