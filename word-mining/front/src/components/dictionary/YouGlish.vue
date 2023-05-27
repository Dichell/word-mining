<template>
    
    <v-sheet>Pronouncing</v-sheet> 
        <a id="yg-widget-0" 
            class="youglish-widget" 
            :data-query=translateStore.translatedText
            :data-lang=generalStore.targetLang.value 
            data-components="8412" 
            data-auto-start="0" 
            data-bkg-color="theme_light"  
            rel="nofollow" href="https://www.youglish.com">Powered by YouGlish.com</a>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from "@/store/general";
import useTranslateStore from "@/store/translate";

export default defineComponent({
    name: 'YouGlish',

    data() {
        const generalStore = useGeneralStore()
        const translateStore = useTranslateStore()

        return { generalStore, translateStore }
    },
    mounted() {
        let youGlishScriipt = document.createElement('script')
        youGlishScriipt.setAttribute('src', 'https://youglish.com/public/emb/widget.js')
        youGlishScriipt.setAttribute('async', "")
        youGlishScriipt.setAttribute('charset', "utf-8")
        document.head.appendChild(youGlishScriipt)
    }

})
</script>

