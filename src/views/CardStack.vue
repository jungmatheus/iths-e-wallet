<template>
    <div class="position">
        <div>
            <div v-for="image in images" v-bind:key="image.ccv" :class="image.bank"
            v-on:click="switchMain(image.ccv)"> 
                <p class="cardbank">{{image.bank.toUpperCase() + " BANK"}}</p>
                <p class="cardname">CARDHOLDER NAME</p>
                <p class="cardvld">VALID THRU</p>
                <img :src="require(`../assets/${image.logo}.svg`)" class="logo">
                <img src="../assets/chipreader.svg" class="chip">
                <p class="number">{{image.cardNumber}}</p>
                <p class="name">{{image.cardName}}</p>
                <p class="vld">{{image.valid}}</p>
            </div>

            <!-- <img  v-bind:src="require(`../assets/${image.path}.svg`)"
            width="55%"> -->
             <!-- <img v-bind:src="require(`../assets/${path}.svg`)" class="card1" width="55%" 
            v-on:click="exportPath"> 
            <img src="../assets/FLOWER CARD.svg" class="card2"  width="55%"  v-on:click="exportPath2">
            <img src="../assets/EVILCORP CARD.svg" class="card3" width="55%"  v-on:click="exportPath3" > -->
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

    computed: {
        images () {
            return this.$root.cardInfo; 
        }
      
    },

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

        switchMain(id) {
            const cardCcv = this.$root.cardInfo.find(element => element.ccv == id)
            this.$emit('switchMain', cardCcv);
        }
        
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
    grid-template-rows:5vh 5vh  5vh 30vh;
}



    .bitcoin {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:yellow;
    position:relative; 
    justify-self:center;  
    font-family: 'Poly', serif;
    cursor:pointer;
    
    
}

    .flower {
        width:270px;
        height:150px;
        border-radius:10px;
        background-color:palevioletred;
        position:relative;  
        justify-self:center;  
        font-family: 'Questrial', sans-serif;
        color:#DAD8D3;
        cursor:pointer;
    }


    .proletariat {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:#DE1616;
    position:relative;  
    justify-self:center; 
    color:#FAFF07;
    cursor:pointer;
}

.evilcorp {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:#0E0D0D;
    position:relative;  
    justify-self:center; 
    color:#D4CDCD;
    cursor:pointer;
}

 p {
    font-size:0.6rem;
}

.cardvld {

    position:absolute;
    top:6.5rem;
    left:10.5rem; 
}

.cardname {
    position:absolute;
    top:6.5rem;
    left:0.5rem;
}

.cardbank {
    position:absolute;
    left:0.5rem;
}

.logo {
    position:absolute;
    left:13.5rem;
    top:1rem;
    width:10%;
}

.chip {
    position:absolute;
    width:10%;
    top:2.5rem;
    left:1rem;
}

.number {
    position:absolute;
    top:5.4rem;
    left:1rem;
}

.name {
    position:absolute;
    top:7.5rem;
    left:0.5rem;

}

.vld {
    position:absolute;
    top:7.5rem;
    left:10.5rem;
}



</style>