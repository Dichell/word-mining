<template>
    <v-sheet>Pronouncing</v-sheet> 

        <v-switch
            :false-value=sourceLang.value
            :true-value=targetLang.value
            v-model="youglishStore.pronounceData.speakLanguageValue"
            @click="togglepronounceLang"
            >
            <template v-slot:prepend>
                <v-sheet :class="youglishStore.pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                    {{ sourceLang.name }}
                </v-sheet>
            </template>
            <template v-slot:append>
                    <v-sheet :class="youglishStore.pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                        {{ targetLang.name }}
                    </v-sheet>
            </template>
        </v-switch>

        <a id="yg-widget-0" 
            class="youglish-widget" 
            :data-query=youglishStore.pronounceData.text
            :data-lang=youglishStore.pronounceData.speakLanguageValue 
            data-components="8412" 
            data-auto-start="0" 
            data-bkg-color="theme_light"  
            rel="nofollow" href="https://www.youglish.com">Powered by YouGlish.com</a>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from "@/store/translate";
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'YouGlish',

    data() {
        const translatelStore = useTranslateStore()
        const youglishStore = useYouglishStore()

        return { translatelStore, youglishStore }
    },
    methods: {
        togglepronounceLang(){
            this.youglishStore.togglePronounce()
        }
    },
    computed: {
        sourceLang(){
            return this.translatelStore.getSourceLang
        },
        targetLang(){
            return this.translatelStore.getTargetLang
        }
    },
    mounted() {
        this.youglishStore.mountPronounceData()
        let youGlishScriipt = document.createElement('script')
        youGlishScriipt.setAttribute('src', 'https://youglish.com/public/emb/widget.js')
        youGlishScriipt.setAttribute('async', "")
        youGlishScriipt.setAttribute('charset', "utf-8")
        document.head.appendChild(youGlishScriipt)
    }

})
</script>
