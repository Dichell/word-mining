<template>
    <v-container>
        <TitleElement text="Pronouncing" />
        <!-- <v-btn
            width="fit-content"
            position='relative'
            :style="{right: '-2px', top: '-30px'}"
            >on-off</v-btn> -->
        <v-sheet border rounded="lg" class="pa-3">

            <v-row class="d-flex flex-row justify-end">
                <v-sheet 
                    class="d-flex flex-row justify-end align-center px-6" 
                    rounded="xl"
                    border
                    width="fit-content"
                    position='relative'
                    :style="{right: '-2px', top: '-30px'}"
                    >
                        <div :class="pronounceStore.pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                            {{ sourceLang.short }}
                        </div>
                        <div class="px-2">
                            <v-switch
                                hide-details="auto"
                                :false-value=sourceLang.value
                                :true-value=targetLang.value
                                color="white"
                                v-model="pronounceStore.pronounceData.speakLanguageValue"
                                @click="togglepronounceLang"
                                ></v-switch>
                        </div>
                        <div :class="pronounceStore.pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                            {{ targetLang.short
                            }}
                        </div>
                </v-sheet>
            </v-row>

        <a id="yg-widget-0" 
            class="youglish-widget" 
            :data-query=pronounceStore.pronounceData.text
            :data-lang=pronounceStore.pronounceData.speakLanguageValue 
            data-components="8412" 
            data-auto-start="1" 
            data-bkg-color="theme_light"  
            rel="nofollow"></a>
        </v-sheet>
    </v-container>
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