<template>
    <v-sheet>Youglish</v-sheet> 
    <a id="yg-widget-0" class="youglish-widget" data-query="great%20power" data-lang="english" data-zones="all,us,uk,aus" data-components="8415" data-bkg-color="theme_light"  rel="nofollow" href="https://youglish.com">Visit YouGlish.com</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'YouGlish',

    data() {
        const youglishStore = useYouglishStore()
        let widget

        return { youglishStore, widget }
    },

    methods: {
    },

    computed: {
        dataLang() {
            return this.youglishStore.sourceLang
        },
        currentText() {
            return encodeURIComponent(this.youglishStore.currentText)
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

