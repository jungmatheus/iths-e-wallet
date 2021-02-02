<template>
    <div>
        <div class="card-template">
            <p class="cardname">CARDHOLDER NAME</p>
            <p class="cardvld">VALID THRU</p>
             <p class="number">{{cardNumber}}</p>
             <p class="name">{{cardName}}</p>
             <p class="date">{{vld}}</p>
        </div>
       
        
        
    </div>
</template>

<script>
export default {

   props: {

       cardNumber: String,
       cardName:  String,
       vld: String,
       ccv: String
       
   }


       
    
}
</script>

<style scoped>

      p {
    font-size:0.6rem;
}

  

     .cardvld {

    position:absolute;
    top:6.5rem;
    left:12rem; 
    }

    .cardname {
        position:absolute;
        top:6.5rem;
        left:0.8rem;
    }

    .cardbank {
        position:absolute;
        left:0.5rem;
    }


     .card-template {
    width:270px;
    height:150px;
    border-radius:10px;
    background-color:grey;
    position:relative; 
    justify-self:center;  
   
    
    
}

    .img {
        position:relative;
    }

    .number {
        position:absolute;
        top:65px;
        left:20px;
        font-size:1rem;
    }

    .name {
        position: absolute;
        top:120.5px;
        left:16px;
    }

    .date {
        position: absolute;
        top:120.5px;
        left:200px;
    }

    .card{ width:15rem; }

    div {
        display:flex;
        justify-content:center;
    }

</style>