<template>
        <v-tooltip text="click to on/off pronounucing" location="right">
            <template v-slot:activator="{ props }">
                <TitleElement 
                    v-bind="props" 
                    text="Pronouncing" 
                    @event="$emit('tooglePronounceIsActive')"
                    /> 
            </template>
        </v-tooltip>

        <v-sheet v-if="pronounceActivity"><i>Turned off. Click to turn on</i></v-sheet>

        <v-sheet v-else border rounded="lg" class="pa-3">

            <!-- pronouncing external wiidget //TODO change to API methods -->
            <a id="yg-widget-0" 
                class="youglish-widget" 
                :data-query=pronounceData.text
                :data-lang=pronounceData.speakLanguageValue 
                data-components="8412" 
                :data-auto-start="autoPlay ? 1 : 0"
                data-bkg-color="theme_light"  
                rel="nofollow"></a>
            <!-- pronouncing external wiidget -->

            <div id="widget-1"></div>


            <v-row class="d-flex flex-row justify-start">
                <v-sheet 
                    class="d-flex flex-row justify-space-around align-center px-6" 
                    rounded="lg"
                    style="position: relative;left: 0px; bottom: 0px; width: 100%;"
                    >
                        <div class="d-flex flex-row align-center">
                            <div :class="pronounceData.speakLanguageValue == sourceLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                                {{ sourceLang.short }}
                            </div>
                            <div class="px-2">
                                <v-switch
                                    hide-details="auto"
                                    :false-value=sourceLang.value
                                    :true-value=targetLang.value
                                    v-model="pronounceData.speakLanguageValue"
                                    @click="$emit('togglepronounceLang')"
                                    ></v-switch>
                            </div>
                            <div :class="pronounceData.speakLanguageValue == targetLang.value ? 'font-weight-bold' : 'font-weight-regular'">
                                {{ targetLang.short
                                }}
                            </div>
                        </div>

                        <div class="d-flex flex-row align-center">
                            <div :class="autoPlay ? 'font-weight-bold' : 'font-weight-regular'">
                                autoplay
                            </div>
                            
                            <div class="px-2">
                                <v-switch
                                    hide-details="auto"
                                    :true-value=true
                                    :false-value=false
                                    :value="autoPlay"
                                    @click="$emit('toggleAutoPlay')"
                                    ></v-switch>
                            </div>
                        </div>
                </v-sheet>
            </v-row>
        </v-sheet>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import TitleElement from '@/components/titles/TitleElement.vue'
import { IPronounceData, Ilanguages } from "@/types";

export default defineComponent({
    name: 'PronouncingComp',
    props: {
        targetLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        sourceLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        pronounceActivity: {
            type: Boolean,
            required: true
        },
        pronounceData: {
            type: Object as PropType<IPronounceData>,
            required: true
        },
        autoPlay: {
            type: Boolean,
            required: true
        }
    },
    components: { TitleElement },
    methods: {

    },
    mounted() {
        let pronounceScriipt = document.createElement('script')
        pronounceScriipt.setAttribute('src', 'https://youglish.com/public/emb/widget.js')
        pronounceScriipt.setAttribute('async', "")
        pronounceScriipt.setAttribute('charset', "utf-8")
        document.head.appendChild(pronounceScriipt)
    }
})
</script>
