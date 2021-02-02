<template>
    <div class="wrapper">
        <div class="main">
            <Top/>
            <Maincard v-bind:mainCardInfo="cardInfo" v-bind:cardSwitched="switched"/>
            <CardStack v-on:switchMain="switchMain" />
            <router-link to="/AddCard" tag="button">ADD CARD</router-link>
        </div>
    </div>
    
</template>

<script>

import Top from '../views/Top.vue' 
import Maincard from '../views/Maincard.vue'
import CardStack from '../views/CardStack.vue'

export default {


    data() { return {

        switched: false,
        cardInfo: ""
    }},



    components: {
        Top: Top,
        Maincard: Maincard,
        CardStack: CardStack
    },

    methods: {

        switchMain(payload) {
            
            this.cardInfo = payload;
            this.switched = true;
        }
    }

    

}
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

div.main {
    font-family: 'Open Sans Condensed', sans-serif;
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

}

button {
    background-color:#383636;
    color:white;
    border-radius:5px;
    width:200px;
    height:50px;
    font-family: 'Open Sans Condensed', sans-serif;
    cursor:pointer;
    
}





</style>