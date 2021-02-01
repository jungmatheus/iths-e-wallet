<template>
    <div>
        <div class="img">
            <img src="../assets/bitcoin card.svg" class="card">
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
       vld: String
       
   }


       
    
}
</script>

<style scoped>

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
        top:107.5px;
        left:20px;
    }

    .date {
        position: absolute;
        top:107.5px;
        left:174px;
    }

    .card{ width:15rem; }

    div {
        display:flex;
        justify-content:center;
    }

</style>