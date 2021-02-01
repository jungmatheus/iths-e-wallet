<template>
 <div class="main">
     <img v-if="switchMain" :src="require(`../assets/${mainCardPath}.svg`)" width="55%" >
     <img v-else src="../assets/proletariat card.svg" width="55%">
</div> 
</template>

<script>

export default {


    props: {
        switchMain: Boolean,  
        mainCardPath: String
    }

}
</script>

<style scoped>

    .main {
        display: flex;
        justify-content:center;
    }
</style>