<template>
    <div>
        <CardTop/>
        <AddCardCard v-bind:cardNumber="transformedNumber"
        v-bind:cardName="transformedName"
        v-bind:vld="transformedVld"
        v-bind:ccv="transformedCcv"/>
        <CardForm 
        v-on:numberSent="numberSent"
        v-on:nameSent="nameSent"
        v-on:vldSent="vldSent"
        v-on:ccvSent="ccvSent"
         />
    </div>
</template>

<script>

import CardTop from "../views/AddCardTop.vue"
import AddCardCard from "../views/AddCardCard.vue"
import CardForm from "../views/CardForm.vue"

export default {

    data() { return {

        transformedNumber: "",
        transformedName: "",
        transformedVld: "",
        transformedCcv: "",
        temp: ""
    }},

    components: {
        CardTop:  CardTop,
        AddCardCard: AddCardCard,
        CardForm: CardForm
    },

    methods: {

        numberSent(payload) {
            this.transformedNumber  = payload;
        
        },

        nameSent(payload) {
            this.transformedName  = payload;
        },

        vldSent(payload) {
            this.transformedVld = payload;
        },

        ccvSent(payload) {
            this.transformedCcv = payload;
        }
    }



    

}
</script>

<style scoped>




</style>