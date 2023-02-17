<template>
    <div id="barchart">
        <Vue3Lottie :autoPlay="autoPlay" ref="ref" :loop="false" :animationData="AstronautJSON"  class=" w-full h-full" />
    </div>
</template>


<script>
import Chart from '../assets/lottie/chart1.json'
export default {
    data() {
        return {
            AstronautJSON: Chart,
            autoPlay:false
        }
    },
    mounted(){
        const element = document.getElementById('barchart');
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.autoPlay = true;
                 this.$refs.ref.play();
                observer.disconnect();
            }
        });
        observer.observe(element);

          
         
    }
}
</script>