<template>
    <v-container>
        <v-sheet>Pronouncing</v-sheet> 
            <v-row class="d-flex justify-start align-center">
                <v-col cols="2" class="d-flex justify-start align-center">
                    <v-sheet :class="pronounceStore.pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                        {{ sourceLang.name }}
                    </v-sheet>
                </v-col>
                <v-col cols="1" class="d-flex justify-center align-center">
                    <v-switch
                        class="d-flex justify-center align-center"
                        :false-value=sourceLang.value
                        :true-value=targetLang.value
                        v-model="pronounceStore.pronounceData.speakLanguageValue"
                        @click="togglepronounceLang"
                        ></v-switch>
                </v-col>
                <v-col cols="2" class="d-flex justify-end align-center">
                    <v-sheet class="d-flex justify-end align-center" :class="pronounceStore.pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                        {{ targetLang.name }}
                    </v-sheet>
                
                </v-col>
            </v-row>
        <!-- <v-switch
            :false-value=sourceLang.value
            :true-value=targetLang.value
            v-model="pronounceStore.pronounceData.speakLanguageValue"
            @click="togglepronounceLang"
            >
            <template v-slot:prepend>
                <v-sheet :class="pronounceStore.pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                    {{ sourceLang.name }}
                </v-sheet>
            </template>
            <template v-slot:append>
                    <v-sheet :class="pronounceStore.pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                        {{ targetLang.name }}
                    </v-sheet>
            </template>
        </v-switch> -->

        <a id="yg-widget-0" 
            class="pronounce-widget" 
            :data-query=pronounceStore.pronounceData.text
            :data-lang=pronounceStore.pronounceData.speakLanguageValue 
            data-components="8412" 
            data-auto-start="0" 
            data-bkg-color="theme_light"  
            rel="nofollow" href="https://www.pronounce.com">Powered by Pronounce.com</a>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// store
import useTranslateStore from "@/store/translate";
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'PronouncingComp',
    data() {
        const translatelStore = useTranslateStore()
        const pronounceStore = usePronounceStore()
        return { translatelStore, pronounceStore }
    },
    methods: {
        togglepronounceLang(){
            this.pronounceStore.togglePronounceLang()
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
        this.pronounceStore.mountPronounceData()
        let pronounceScriipt = document.createElement('script')
        pronounceScriipt.setAttribute('src', 'https://pronounce.com/public/emb/widget.js')
        pronounceScriipt.setAttribute('async', "")
        pronounceScriipt.setAttribute('charset', "utf-8")
        document.head.appendChild(pronounceScriipt)
    }

})
</script>
