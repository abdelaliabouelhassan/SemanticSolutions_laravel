<template>
    <section class=" w-full relative py-48 overflow-hidden" id="Sofunktioniert">
         <div class="md:max-w-[200px] max-w-[180px] lg:max-w-[440px] 2xl:max-w-[670px] z-20  w-full vt h-0.5 bg-secondary absolute bottom-0 right-0 md:right-auto md:left-0  "></div>
         <div class=" w-full md:max-w-[758px] lg:max-w-[1210px] m-auto  px-4 flex md:flex-row flex-col space-y-10 md:space-y-0 items-center xl:items-end space-x-20 relative z-20">
            <div class=" w-full flex md:flex-row   items-center md: space-x-10 flex-col-reverse  ">
                <div class=" w-full max-w-[249px] max-h-[216.7px] sm:max-h-[291px] lg:max-h-[417px] sm:max-w-[334px] lg:max-w-[480px] vt">
                    <img :src="'/' + steps[active].img" class=" w-full h-full vt" alt="">
                </div>
                <div class=" w-full flex flex-col items-start space-y-8 -space-x-2 lg:-space-x-5 pb-10 md:pb-0 max-w-[390px] md:max-w-full">
                    <div class=" flex flex-col items-start space-y-1">
                        <span class=" text-[28px] lg:text-[35px] font-bold font-inter text-primary">So <span class=" text-secondary">funktioniert’s</span></span>
                        <p class="pr-10 sm:pr-0 text-[15px] leading-[18.15px] lg:leading-[21.78px] lg:text-[18px] font-light text-primary font-inter max-w-[390px] lg:max-w-full">In 3 Schritten gehören deine Personalprobleme der Vergangenheit an.</p>
                    </div>
                    <div class=" w-full flex flex-col items-start space-y-5">
                        <div class=" w-full grid grid-cols-11 space-x-4" @click="SetActive(index)" v-for="(step,index,key) in steps" :key="key">
                            <div class=" flex flex-col items-center space-y-5 cursor-pointer">
                                <div class=" w-[31px] h-[31px] lg:w-[42px] lg:h-[42px]">
                                <div class=" w-[30px] h-[30px] lg:w-[41px] lg:h-[41px] rounded-full  flex vt" :class="{'bg-secondary': active == index,'border border-primary': active != index}">
                                    <span class=" m-auto text-[15px] lg:text-[18px] font-bold font-inter " :class="{'text-tertiary': active == index,'text-primary': active != index}">{{index + 1}}</span>
                                </div>
                                </div>
                                <div class=" h-full border border-dashed border-[#000000]" v-if="index < steps.length - 1 "></div>
                                
                            </div>
                            <div class=" flex flex-col items-start space-y-2 col-span-10 lg:pb-5">
                                <span class=" text-[16px] md:text-[18px] lg:text-[27px] font-bold font-inter text-primary cursor-pointer hover:text-opacity-80 vt">{{step.title}}</span>
                                <p class=" max-w-[429px] text-[15px] leading-[18.15px] lg:leading-[21.78px] lg:text-[18px] font-light text-primary font-inter">{{step.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        <div class=" ">
            <img src="../assets/Polygonleft.png" class=" w-full h-full absolute bottom-0 left-0 md:max-h-[300px] xl:max-h-[531px] hidden md:block" alt="">
            <img src="../assets/Polygonbottom.png" class=" w-full h-full absolute top-0 left-0 max-h-[380px] md:max-h-[300px] xl:max-h-[531px] md:hidden" alt="">
        </div>
        
    </section>
</template>


<script>
export default {
    name: "SixthSection",
    data() {
        return {
           active:0,
           steps:[
            {
                title:'Maßgeschneiderte Kommunikation',
                text:'Jeder einzelne Touchpoint ist auf deinen Wunschbewerber zugeschnitten.',
                img:'im1.png'
            },
             {
                title:'Reduzierte Reibungspunkte ',
                text:'Von Kontaktaufnahme bis Bewerbung in unter 2 Minuten durch unseren intuitiven Funnelaufbau. ',
                img:'im2.png'
            },
             {
                title:'Zufriedene Bewerber',
                text:'Qualifizierte Bewerber filtern und Wunschkandidaten auswählen. Mit uns langfristig, strategisch und planbar Mitarbeiter einstellen.',
                img:'im3.png'
            }
           ] 
        }
    },
    methods: {
        SetActive(index) {
            this.active = index
        }
    },
}
</script>