<template>
    <div>
    <div class="main">
        <div v-if="cardSwitched" :class="mainCardInfo.bank"> 
                <p class="cardbank">{{mainCardInfo.bank.toUpperCase() + " BANK"}}</p>
                <p class="cardname">CARDHOLDER NAME</p>
                <p class="cardvld">VALID THRU</p>
                <img :src="require(`../assets/${mainCardInfo.logo}.svg`)" class="logo">
                <img src="../assets/chipreader.svg" class="chip">
                <p class="number">{{mainCardInfo.cardNumber}}</p>
                <p class="name">{{mainCardInfo.cardName}}</p>
                <p class="vld">{{mainCardInfo.valid}}</p>
            </div>

         <div v-else :class="mainCard.bank"> 
            <p class="cardbank">{{mainCard.bank.toUpperCase() + " BANK"}}</p>
                <p class="cardname">CARDHOLDER NAME</p>
                <p class="cardvld">VALID THRU</p>
                <img :src="require(`../assets/${mainCard.logo}.svg`)" class="logo">
                <img src="../assets/chipreader.svg" class="chip">
                <p class="number">{{mainCard.cardNumber}}</p>
                <p class="name">{{mainCard.cardName}}</p>
                <p class="vld">{{mainCard.valid}}</p>
             </div>
        </div>
    </div> 

</template>

<script>

export default {


    props: {
        cardSwitched: Boolean,  
        mainCardInfo: Object
    },

    computed: {

        mainCard () {
            return this.$root.cardInfo[1];
            
        } 
         
    }


}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poly&family=Questrial&display=swap');

    .main {
        position:relative;
    }

    div {
        display:flex;
        justify-content:center;
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

    .bitcoin {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:yellow;
    position:relative; 
    justify-self:center;  
    font-family: 'Poly', serif;
    
    
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
    }


    .proletariat {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:#DE1616;
    position:relative;  
    justify-self:center; 
    color:#FAFF07;
}

.evilcorp {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:#0E0D0D;
    position:relative;  
    justify-self:center; 
    color:#D4CDCD;
}

     p {
    font-size:0.6rem;
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