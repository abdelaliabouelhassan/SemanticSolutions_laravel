<template>
    <div class=" w-full relative py-32 md:py-48 overflow-hidden">
         <div class=" w-full md:max-w-[646px] lg:max-w-[903px] m-auto  px-4 flex md:flex-row flex-col space-y-10 md:space-y-0 items-center xl:items-end space-x-20 relative z-20">
           <div class=" flex flex-col items-start space-y-8 w-full">
            <span class=" text-primary font-bold font-inter text-[28px] lg:text-[35px]">Häufige  <span class=" text-secondary">Fragen</span></span>
            <div class=" w-full flex flex-col items-start space-y-7">
                <ContentCard title="Was ist Social Recruiting?" text="Moderne Zeiten erfordern moderne Maßnahmen. Durch personalisierte Werbung in den sozialen Netzwerken erhöht Social Recruiting die Sichtbarkeit deiner Stellenanzeige. Performance optimierte Kampagnen erreichen so die richtigen Leute, zur richtigen Zeit, am richtigen Ort. Diese werden nun durch einen Mobile-Funnel vorqualifiziert. Das Resultat: durch eine Vielzahl qualifizierter Bewerber können planbar und strategisch offene Stellen besetzt werden." />
                <ContentCard title="Was sind die Vorteile einer Social-Recruiting-Agentur?" text="Von der Erstellung der Werbeanzeigen über den Aufbau deines Social-Recruiting-Funnels bis zur Kontaktaufnahme der qualifizierten Bewerber. Eine Social-Recruiting-Agentur steht dir mit Rat und Tat zur Seite. Als Marketing-Agentur spezialisiert auf das Erreichen von Bewerbern führen so einschlägige Werbekampagnen zu einschlagenden Ergebnissen.  </br></br>  Die Fragen: Wo ist meine Zielgruppe zu finden? Wie kann ich sie erreichen? Welche meiner Vorteile heben mich im Arbeitgebermarkt ab? Werden mithilfe einer Social-Recruiting-Agentur nicht nur beantwortet, sondern entwickeln sich zu den Grundpfeilern einer neuen und vollumfänglichen Bewerberstrategie." />
                <ContentCard title="Wie erreicht ihr meine Zielgruppe?" text="Du fährst mit deinem Auto zur Arbeit, plötzlich ein kleiner Schlag und ein Riss in deiner Frontscheibe.  In der Mittagspause scrollst du ahnungslos auf Instagram und eine Werbung erscheint. Ein Angebot, für einen Scheibenwechsel, mit besseren Konditionen als erhofft. Das ist personalisierte Werbung. </br> </br> Algorithmen wissen heutzutage oft besser Bescheid über unsere Wünsche und Bedürfnisse als wir selbst. Mithilfe dieser Technologie und einer Kampagne, welche deinen Wunschbewerber ganz genau ins Fadenkreuz nimmt, erreichen wir deine Zielgruppe, erwecken in ihnen das Gefühl bereits in deinem Unternehmen zu arbeiten und verhelfen dir zu qualifizierten Bewerben." />
                <ContentCard title="Welche Stellen könnt ihr besetzen?" text="Wir erreichen jeden Menschen, der ein Smartphone besitzt und Social-Media nutzt. Egal ob LinkedIn, Facebook, Instagram, TikTok. Auch wenn der Arbeitsmarkt leer zu sein scheint, nachweislich sind 25 % aller Fachkräfte unzufrieden mit ihrem Arbeitgeber und fast jede 2. Fachkraft auf Social-Media. </br> </br> Hochgerechnet sind das in deiner Region unzählige Fachkräfte und genau dort setzen wir mit unserer eigenen Methode an und überzeugen diese Fachkräfte von Ihrem Unternehmen." />
                <ContentCard title="Warum funktioniert eure Social-Recruiting-Methode?" text="Viele Agenturen arbeiten leidenschaftslos und liefern baukastenartige Ergebnisse. Genau das machen wir anders, wir setzen auf personalisierung. Das Bedeutet, wir nutzen nicht nur personalisierte Werbung, sondern personalisieren auch deine Werbung, so dass sie auf dein Unternehmen Maßgeschneidert ist und deinen Wunschkanidaten erreicht." />
                <ContentCard title="Irgendwas mit Mitarbeitergewinnung?" text="Zeit ist Geld und wir wissen grade Unternehmer wie du haben davon wenig. Die schnelle Besetzung deiner Stellen ist für uns höchste Priorität, eine ausgiebige Vorbereitung ist dafür der Grundstein. Gemeinsam erarbeiten wir deinen Wunschbewerber und legen Ziele für unsere Zusammenarbeit fest. Danach lehnst du dich zurück und wir setzen uns direkt an die Arbeit für deinen neuen Weg offene Stellen zu besetzen. " />
            </div>
           </div>
         </div>
         <div class=" ">
            <img src="../assets/Polygonleft.png" class=" w-full h-full absolute bottom-0 left-0 max-h-[280px] md:max-h-[300px] xl:max-h-[531px] " alt="">
        </div>
    </div>
</template>


<script>
import ContentCard from '../UI/ContentCard.vue'
export default {
    components: {
        ContentCard
    }
    
}
</script>

