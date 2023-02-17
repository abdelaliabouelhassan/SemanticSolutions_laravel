<template>
    <div
     v-if="open"
      class="relative z-[90] md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-primary"></div>

      <div class="fixed inset-0 z-40 flex">
        <div class="relative w-full max-w-xs bg-background bg-opacity-95">
          <div class="absolute top-0 right-0 -mr-12 pt-2">
            <button
              @click="open = false"
              type="button"
              class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

        <div class=" w-full flex flex-col items-start space-y-10 py-20 px-4">
            <a @click.prevent="goTo('Wiesowir')" href="javascript:void(0)"  class=" text-lg text-senary font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300 ">Wieso wir</a>
            <a @click.prevent="goTo('Leistungen')" href="javascript:void(0)" class=" text-lg text-senary font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300 ">Leistungen</a>
            <a @click.prevent="goTo('Sofunktioniert')" href="javascript:void(0)"  class=" text-lg text-senary font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300 ">So funktioniert’s</a>
            <a @click.prevent="goTo('Dassindwir')" href="javascript:void(0)" class=" text-lg text-senary font-markpro font-[450] z-10 cursor-pointer hover:text-opacity-60 transform ease-in-out delay-100 duration-300 ">Das sind wir</a>

        </div>
        </div>

        <div class="w-14 flex-shrink-0" aria-hidden="true">
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            open:false,
        }
    },
    methods:{
        openMenu(){
            this.open = true
        },
        goTo(id){
            this.open = false
            const element = document.getElementById(id)
            element.scrollIntoView({behavior: 'smooth'})
            
        }
    }
}
</script>
