<template>
    <v-sheet>Youglish</v-sheet> 
    <a id="yg-widget-0" 
    
        :data-query=currentText 
        :data-lang=dataLang

        class="youglish-widget" 
        data-auto-start="0"
        data-zones="all,us,uk,aus" 
        data-components="8413" 
        data-bkg-color="theme_light"  
        rel="nofollow" 
        href="https://www.youglish.com">Visit YouGlish.com</a>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralStore from "@/store/general";
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'YouGlish',

    data() {
        const generalStore = useGeneralStore()
        const youGlishStore = useYouglishStore()

        return { generalStore, youGlishStore }
    },

    methods: {
    },

    computed: {
        dataLang() {
            return this.generalStore.getSourceLang
        },
        currentText() {
            return this.generalStore.sourceText
        },
        youglishIsActive(){
            return this.youGlishStore.isActive
        }
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

