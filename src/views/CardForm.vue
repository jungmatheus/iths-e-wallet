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
                    <input type="text" class="inline input2">  
            </div>
            <p>VENDOR</p>
            <span class="vendor"  v-on:click="showVendor = !showVendor">
                <p>▼</p>
            </span>
            <ul v-if="showVendor">
                <li>BITCOIN INC</li>
                <li>NINJA BANK</li>
                <li>EVILCORP</li>
                <li>ROSA BANK</li>
            </ul>
            <button>ADD CARD</button>
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
        temp2: ""
        

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
   
}

.vendor {
    width:16rem;
    height:2.5rem;
   
    border-radius:5px;
    border: solid 1px black;
    display:flex;
    justify-content:flex-end;
    align-items:center;
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
}



</style>