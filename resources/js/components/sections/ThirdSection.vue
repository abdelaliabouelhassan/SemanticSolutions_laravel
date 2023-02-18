<template>
   <section class=" w-full bg-primary py-20">
    <div class=" h-0.5 bg-secondary max-w-[180px] md:max-w-[300px] lg:max-w-[440px] 2xl:max-w-[670px] w-full vt "></div>
     <div class=" w-full md:max-w-[758px] lg:max-w-[1150px] m-auto py-5 lg:py-28 px-4">
        <div class="  w-full justify-end md:flex hidden lg:hidden">
             <div class="  flex  flex-col items-end pt-5 space-y-2  pb-10 ">
                    <div class=" flex items-center space-x-2">
                       <button @click="changeSelected(4)" :class="{'text-primary bg-tertiary':selected == 4,'text-tertiary':selected != 4}" class=" px-2 py-1 text-[15px] font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Stellenwert Mobile Recruiting</button>
                        <button @click="changeSelected(2)" :class="{'text-primary bg-tertiary':selected == 2,'text-tertiary':selected != 2}" class=" px-2 py-1 text-[15px]  font-bold whitespace-nowrap font-inter   rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Prognose Fachkräftemangel</button>
                    </div>
                     <div class="  flex items-center space-x-2">
                        <button @click="changeSelected(3)" :class="{'text-primary bg-tertiary':selected == 3,'text-tertiary':selected != 3}" class=" px-2 py-1 text-[15px]  font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Recruiting-Kanäle Unternehmen</button>
                        <button @click="changeSelected(1)" :class="{'text-primary bg-tertiary':selected == 1,'text-tertiary':selected != 1}" class="  px-2 py-1 text-[15px]  font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Social-Media-Nutzung nach Alter</button>

                    </div>
                </div>
        </div>
        <div class=" w-full flex md:flex-row flex-col space-y-14 md:space-y-0 max-w-[400px] md:max-w-full m-auto   items-start" :class="{' md:space-x-4 lg:space-x-20': selected == 1 || selected == 3,' md:space-x-4 lg:space-x-28':selected == 2 || selected == 4}">
            <div  class="w-full md:max-w-[293px] lg:max-w-[436px] flex flex-col items-start space-y-5">
               <div class=" w-full space-y-5 md:h-[320px]" v-if="selected == 1">
                 <p class=" text-white text-[24px] md:text-[28px] lg:text-[35px] font-bold font-inter leading-[29.5px] md:leading-[33.89px] lg:leading-[42.36px] max-w-[264px] md:max-w-[282px] lg:max-w-[400px]">
                    <span class=" text-secondary">Strategische</span> und <span class=" text-secondary">planbare</span> Besetzung 
                    von Stellen
                </p>

                <p class=" text-[15px] lg:text-[18px] leading-[18.15px] lg:leading-[21.78px] font-inter font-light text-tertiary max-w-[293px] lg:max-w-[436px]">
                    Erreiche deinen Wunschbewerber dort, wo er ist. Jede 2. Fachkraft ist regelmäßig auf sozialen Medien unterwegs und ihre Stellenanzeige nicht? 
                    <br> <br>
                    Stell dir vor, du stehst vor einem Topf mit Gold und siehst ihn nicht. Nehme das Potenzial wahr und erreiche die richtigen Leute am richtigen Ort.

                </p>
               </div>
                <div class=" w-full space-y-5 md:h-[320px]" v-if="selected == 2">
                    <p class=" text-white text-[24px] md:text-[28px] lg:text-[35px] font-bold font-inter leading-[29.5px] md:leading-[33.89px] lg:leading-[42.36px] max-w-[264px] md:max-w-[282px] lg:max-w-[400px]">
                        Die Realität des 
                        <span class=" text-secondary">Fachkräftemangels</span>
                    </p>

                    <p class=" text-[15px] lg:text-[18px] leading-[18.15px] lg:leading-[21.78px] font-inter font-light text-tertiary max-w-[293px] lg:max-w-[436px] md:pt-10">
                    Das statistische Bundesamt prognostiziert bis zum Jahr 2040 einen Verlust von 5,5 Millionen qualifizierten Arbeitnehmern in Deutschland. 
                        <br><br>
                    Die kalte Wahrheit: Eine solide Arbeitgebermarke und Sichtbarkeit sind der einzige Weg eine langfristige Versorgung mit Fachkräften sicherzustellen.
                    </p>
                </div>
                <div class=" w-full space-y-5 md:h-[320px]" v-if="selected == 3">
                    <p class=" text-white text-[24px] md:text-[28px] lg:text-[35px] font-bold font-inter leading-[29.5px] md:leading-[33.89px] lg:leading-[42.36px] max-w-[264px] md:max-w-[282px] lg:max-w-[431px]">
                      <span class=" text-secondary"> Social Media</span> als <span class=" text-secondary">Recruiting-Kanal</span>  ist kein
                      <span class=" text-secondary">Trend</span> mehr
                    </p>

                    <p class=" text-[15px] lg:text-[18px] leading-[18.15px] lg:leading-[21.78px] font-inter font-light text-tertiary max-w-[293px] lg:max-w-[436px]">
                    Herkömmliche Recruiting-Methoden sind veraltet. Headhunter kosten durchschnittlich 30%-50% eines Jahresgehalts, Stellenportale sind wie Glückspiel.
                        <br> <br>
                    Eine direkte Ansprache in den sozialen Medien, durch personalisierte Werbung, führt zu qualifizierten Bewerbern. Diese Methoden nutzen bereits über 44% aller Unternehmen.
                    </p>
                </div>
                <div class=" w-full spac-y-5 md:h-[320px]" v-if="selected == 4">
                <p class=" text-white text-[24px] md:text-[28px] lg:text-[35px] font-bold font-inter leading-[29.5px] md:leading-[33.89px] lg:leading-[42.36px] max-w-[264px] md:max-w-[282px] lg:max-w-[400px]">
                    <span class=" text-secondary">Bewerber</span> sehnen sich nach <span class=" text-secondary">Mobile Recruiting</span>
                </p>

                <p class=" text-[15px] lg:text-[18px] leading-[18.15px] lg:leading-[21.78px] font-inter font-light text-tertiary max-w-[293px] lg:max-w-[436px] md:pt-10">
                  Kandidaten wollen einen schnellen, reibungslosen Bewerbungsprozess. Bereits 85,7% der Befragten sehen Mobile Recruiting als ihre Alternative. 
                <br> <br>
                 Viele Unternehmen werden dem nicht gerecht. Weniger als 58% der größten Unternehmen Deutschlands bauen momentan auf Mobile Recruiting.

                </p>
                </div>
                <div class=" w-full  flex-col items-start pt-5 space-y-2 lg:flex hidden  ">
                    <div class=" w-full flex items-center space-x-2">
                        <button @click="changeSelected(1)" :class="{'text-primary bg-tertiary':selected == 1,'text-tertiary':selected != 1}" class="  px-2 py-1 text-base font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Social-Media-Nutzung nach Alter</button>
                        <button @click="changeSelected(2)" :class="{'text-primary bg-tertiary':selected == 2,'text-tertiary':selected != 2}" class=" px-2 py-1 text-base font-bold whitespace-nowrap font-inter   rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Prognose Fachkräftemangel</button>
                    </div>
                     <div class=" w-full flex items-center space-x-2">
                        <button @click="changeSelected(3)" :class="{'text-primary bg-tertiary':selected == 3,'text-tertiary':selected != 3}" class=" px-2 py-1 text-base font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Recruiting-Kanäle Unternehmen</button>
                        <button @click="changeSelected(4)" :class="{'text-primary bg-tertiary':selected == 4,'text-tertiary':selected != 4}" class=" px-2 py-1 text-base font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Stellenwert Mobile Recruiting</button>
                    </div>
                </div>
            </div>
            
            
            <div class=" w-full max-w-[328px] md:max-w-[453px] lg:max-w-[672px] h-[330px] lg:h-[451px]">
                    <BarChart v-if="selected == 1" />
                    <LineChart v-else-if="selected == 2" />
                    <BarChart1 v-else-if="selected == 3"/>
                    <BarChart2 v-else/>
            </div>

              <div class=" w-full  flex-col items-start pt-5 space-y-2 flex md:hidden ">
                    <div class=" w-full flex flex-col items-start space-y-2">
                        <button @click="changeSelected(1)" :class="{'text-primary bg-tertiary':selected == 1,'text-tertiary':selected != 1}" class="  px-2 py-1 text-[15px] font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Social-Media-Nutzung nach Alter</button>
                        <button @click="changeSelected(3)" :class="{'text-primary bg-tertiary':selected == 3,'text-tertiary':selected != 3}" class=" px-2 py-1 text-[15px] font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Recruiting-Kanäle Unternehmen</button>

                    </div>
                     <div class=" w-full flex flex-col items-start space-y-2">
                        <button @click="changeSelected(4)" :class="{'text-primary bg-tertiary':selected == 4,'text-tertiary':selected != 4}" class=" px-2 py-1 text-[15px] font-bold whitespace-nowrap font-inter  rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Stellenwert Mobile Recruiting</button>
                        <button @click="changeSelected(2)" :class="{'text-primary bg-tertiary':selected == 2,'text-tertiary':selected != 2}" class=" px-2 py-1 text-[15px] font-bold whitespace-nowrap font-inter   rounded-[3px] border border-tertiary hover:bg-tertiary hover:text-primary vt">Prognose Fachkräftemangel</button>

                    </div>
                </div>
        </div>
    </div>
   </section>
</template>


<script>
import BarChart from '../UI/BarChart.vue'
import LineChart from '../UI/LineChart.vue'
import BarChart1 from '../UI/BarChart1.vue'
import BarChart2 from '../UI/BarChart2.vue'
export default {
    components: {
        BarChart,
        LineChart,
        BarChart1,
        BarChart2
    },
    data(){
        return {
            selected:1,
        }
    },
    methods:{
        changeSelected(index){
            this.selected = index
        }
    }
}
</script>