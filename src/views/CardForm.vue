<template>
    <div class="wrapper">
        <div class="form">
            <p>CARD NUMBER</p>
            <input type="text" v-model="number" v-on:keyup="pressedNumber">
            <p>CARDHOLDER NAME</p>
            <input type="text" v-model="name" v-on:keyup="pressedName">
            <div class=inline>
                    <p class="inline">VALID THRU</p> 
                    <p class="inline ccv">CCV</p><br>
                    <input type = "month" class="inline input" v-model="vld" v-on:change="pressedVld">   
                    <input type="text" class="inline input2" v-model="ccv" v-on:keyup="pressedCcv">  
            </div>
            <p>VENDOR</p>
            <span class="vendor"  v-on:click="showVendor = !showVendor">
                <p>{{this.currentBank.toUpperCase()}}</p>
                <p>▼</p>
            </span>
            
            <ul v-if="showVendor">
                
                <li v-for="item in banks" v-bind:key="item.index"
                v-on:click="saveBank(item.class)"
                >{{item.name}}</li>
            </ul>
        
            <!-- <router-link to="/" tag="button" v-on:click="addCard">ADD CARD</router-link> -->
            <button v-on:click="addCard">ADD CARD</button>
           
    </div>
           
        
    </div>
</template>

<script>
export default {

    data() { return {

        showVendor: false,
        number: "",
        name: "",
        vld: "",
        temp : "",
        temp2: "",
        ccv: "",
        vendor: "",
        banks: [
            {
                name: "BITCOIN INC",
                class: "bitcoin"
            },
            {
                name: "PROLETARIAT BANK",
                class: "proletariat"
            },
            {
                name: "EVILCORP",
                class: "evilcorp"
            },
            {
                name: "ROSA BANK",
                class: "flower"
            }
        ],
        currentBank: ""

        

    }},

    methods: {
        pressedNumber() {
            
            if(this.number.length <= 15 && this.number >= 0) {
               
               this.temp = this.number;

               return this.$emit('numberSent', this.number);

            }
            else {
                this.number = this.temp;
            }
 
        },

        pressedName() {
            this.$emit('nameSent', this.name);
        },

        pressedVld() {
            this.$emit('vldSent', this.vld);
        },

        pressedCcv() {
            this.$emit('ccvSent', this.ccv)
        },

        saveBank(bank) {
            this.currentBank = bank;
            this.showVendor = false;
        },

        addCard() {

            if(this.currentBank.length !== 0) {
                 this.$root.cardInfo.push({
                cardNumber: this.number,
                cardName: this.name,
                valid: this.vld,
                ccv: this.ccv,
                bank: this.currentBank,
                logo: this.currentBank + "logo",
                path: this.currentBank + "card"
                
                })
                this.$router.push({path: "/"})
                }
            else {
                alert("Pick a bank in order to proceed!")
            }
        }


    }

  




}
</script>

<style scoped>




ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    width:16rem;
    height:2.5rem;
    border: solid 1px black;
    border-radius:5px;
    text-align:center;
    cursor:pointer;
   
}






.vendor {
    width:16rem;
    height:2.5rem;
   
    border-radius:5px;
    border: solid 1px black;
    display:flex;

    justify-content:flex-end;
    cursor:pointer;
}

.vendor p {
    padding-right:0.5rem;
}

.ccv {
    margin-left:3rem;
    
    
}

.input {
    width:6.5rem;
}

.input2 {
    margin-left:2rem;
    width:6.5rem;
}

.form {
    display:flex;
    flex-direction: column;
    width:16rem;
    height:20rem;
     font-family: 'Open Sans Condensed', sans-serif;

}

.inline {

  display:inline-block;
  
  
    
}

.wrapper {
    display:flex;
    flex-direction:column;
    align-items:center;
}

input {
    width:15rem;
}

button {
    margin-top:2rem;
    margin-left:2rem;
    background-color:#383636;
    color:white;
    border-radius:5px;
    width:200px;
    height:50px;
    font-family: 'Open Sans Condensed', sans-serif;
    cursor:pointer;

}



</style>