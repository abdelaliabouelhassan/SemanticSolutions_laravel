<template>
    <div class=" w-full bg-white md:bg-tertiary">
        <Header />
        <div class="w-full h-full">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>


<script>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
export default {
    components: {
        Header,
        Footer
    },
}
</script>