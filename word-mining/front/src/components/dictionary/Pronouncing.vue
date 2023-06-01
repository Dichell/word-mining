<template>
        <v-tooltip text="click to on/off pronounucing" location="right">
            <template v-slot:activator="{ props }">
                <TitleElement v-bind="props" text="Pronouncing" @event="tooglePronounceIsActive"/> 
            </template>
        </v-tooltip>

        <v-sheet 
            v-if="pronounceStore.isActive" 
            border rounded="lg" class="pa-3">

            <a id="yg-widget-0" 
                class="youglish-widget" 
                :data-query=pronounceStore.pronounceData.text
                :data-lang=pronounceStore.pronounceData.speakLanguageValue 
                data-components="8412" 
                :data-auto-start=pronounceStore.autoPlay
                data-bkg-color="theme_light"  
                rel="nofollow"></a>

            <v-row class="d-flex flex-row justify-start">
                <v-sheet 
                    class="d-flex flex-row justify-space-around align-center px-6" 
                    rounded="lg"
                    
                    style="position: relative;left: 0px; bottom: 0px; width: 100%;"
                    >
                        <div class="d-flex flex-row align-center">
                            <div :class="pronounceStore.pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                                {{ sourceLang.short }}
                            </div>
                            <div class="px-2">
                                <v-switch
                                    hide-details="auto"
                                    :false-value=sourceLang.value
                                    :true-value=targetLang.value
                                    v-model="pronounceStore.pronounceData.speakLanguageValue"
                                    @click="togglepronounceLang"
                                    ></v-switch>
                            </div>
                            <div :class="pronounceStore.pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                                {{ targetLang.short
                                }}
                            </div>
                        </div>

                        <div class="d-flex flex-row align-center">
                            <div :class="pronounceStore.autoPlay == 1 ? 'font-weight-bold' : 'font-weight-regular'">
                                autoplay
                            </div>
                            
                            <div class="px-2">
                                <v-switch
                                    hide-details="auto"
                                    :false-value=0
                                    :true-value=1
                                    v-model="pronounceStore.autoPlay"
                                    ></v-switch>
                            </div>
                        </div>
                </v-sheet>
            </v-row>
        </v-sheet>
        <v-sheet v-else><i>Click to turn on this.</i></v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// store
import useTranslateStore from "@/store/translate";
import usePronounceStore from "@/store/pronouncing";
// components
import TitleElement from '@/components/titles/TitleElement.vue'

export default defineComponent({
    name: 'PronouncingComp',
    data() {
        const translatelStore = useTranslateStore()
        const pronounceStore = usePronounceStore()
        return { translatelStore, pronounceStore }
    },
    components: { TitleElement },
    methods: {
        tooglePronounceIsActive(): void {
            this.pronounceStore.togglePronouncing()
        },
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
        pronounceScriipt.setAttribute('src', 'https://youglish.com/public/emb/widget.js')
        pronounceScriipt.setAttribute('async', "")
        pronounceScriipt.setAttribute('charset', "utf-8")
        document.head.appendChild(pronounceScriipt)
    }
})
</script>

<style>

.ddd{
    width: fit-content;
}

</style>