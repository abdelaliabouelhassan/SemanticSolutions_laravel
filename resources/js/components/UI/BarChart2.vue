<template>
    <Vue3Lottie :loop="false" :animationData="AstronautJSON" class=" w-full h-full" />
</template>


<script>
import Chart from '../assets/lottie/chart4.json'
export default {
    data() {
        return {
            AstronautJSON: Chart
        }
    }
}
</script>