<template>
    <v-container v-if="translateStore.getHistory.length > 0" style="position: relative; top: -20px;">
        <v-row align="center">
            <v-col style="max-width: fit-content;">
                <v-tooltip text="clear history" location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn 
                            v-bind="props"
                            size="small"
                            icon="mdi-close" 
                            density="compact" 
                            variant="text"
                            color="red"
                            @click="clearHistory"></v-btn>
                    </template>
                </v-tooltip>
                Last words:
            </v-col>
            <v-col>
                <v-row class="d-flex flex-row justify-start align-center">
                    <div style="overflow-x:auto; white-space: nowrap;">
                        <v-chip
                            closable
                            close-icon="mdi-close"
                            class="mx-1 mb-3"
                            v-for="({sourceText, fromLangKey, toLangKey, translatedText}, index) in translateStore.getHistory"
                            @click="translateThis(sourceText, fromLangKey, toLangKey)"
                            @click:close="deleteChip(index)"
                            >{{ sourceText }}
                                <v-tooltip activator="parent" location="bottom">
                                    {{translatedText}}
                                </v-tooltip>
                                
                        </v-chip>
                    </div>
                </v-row>
<!--clouds-->   
                    <!-- <div style="position: relative; float: right; top: -34px; right: -14px; height: 35px; width: 70px; background-image: linear-gradient(to left, white, transparent)"></div>
                    <div style="position: relative; top: -34px; left: -14px; height: 35px; width: 70px; background-image: linear-gradient(to right, white, transparent)"></div> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'
import usePronouncingStore from '@/store/pronouncing'

export default defineComponent({
    name: 'TranslattionHistoryComp',
    data() {
        const translateStore = useTranslateStore()
        const pronouncingStore = usePronouncingStore()
        return { translateStore, pronouncingStore }
    },
    methods: {
        clearHistory(){
            localStorage.setItem('translationsHistory', JSON.stringify([]))
        },
        translateThis(word: string, langFrom: number, langTo: number){
            this.translateStore.updateTranslateObject("sourceText", word)
            this.translateStore.updateTranslateObject("fromLangKey", langFrom)
            this.translateStore.updateTranslateObject("toLangKey", langTo)
            this.translateStore.translate()
            this.translateStore.textInput = word
            this.pronouncingStore.refillPronDataFromTranslateSource()
            this.pronouncingStore.triggerRefresh()
        },
        deleteChip(i: number){
            this.translateStore.deleteOneFromHistory(i)
        }
    }
})
</script>

