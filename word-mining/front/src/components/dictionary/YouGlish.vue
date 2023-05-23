<template>
    
    <v-sheet>Youglish</v-sheet> 
        <a id="yg-widget-0" 
            class="youglish-widget" 
            :data-query=generalStore.sourceText
            :data-lang=generalStore.sourceLang.value 
            data-components="8412" 
            data-auto-start="0" 
            data-bkg-color="theme_light"  
            rel="nofollow" href="https://www.youglish.com">Powered by YouGlish.com</a>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from "@/store/general";

export default defineComponent({
    name: 'YouGlish',

    data() {
        const generalStore = useGeneralStore()

        return { generalStore }
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

