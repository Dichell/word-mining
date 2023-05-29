<template>
    <v-container>
        <v-sheet>Alternative translations: </v-sheet> 
        <v-sheet>
            <v-table>
                <tbody>
                    <tr v-for="{displayTarget, posTag, backTranslations} in alternativeDataToText">
                        <td>
                            <b><v-btn 
                                    density="compact" 
                                    variant="text" 
                                    @click="pronounceThis(displayTarget, translateStore.getTargetLang.value)"
                                    @dblclick="translateThis(displayTarget, translateStore.getTargetLang.key, translateStore.getSourceLang.key)"
                                    >{{ displayTarget }}
                                </v-btn></b>
                        </td>
                        <td>
                            <i :style="{fontSize: 'x-small'}">{{ posTag }}</i>
                        </td>
                        <td>
                            <v-btn 
                                density="compact" v-for="{normalizedText} in backTranslations"
                                variant="text"
                                @click="pronounceThis(normalizedText, translateStore.getSourceLang.value)"
                                @dblclick="translateThis(normalizedText, translateStore.getSourceLang.key, translateStore.getTargetLang.key)"
                                >{{ normalizedText }}
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
                <v-tooltip activator="parent" location="top"><u>Click:</u> pronounce selected. <u>Double click:</u> translate selected</v-tooltip>
            </v-table>
        </v-sheet> 
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'
import usePronounceStore from '@/store/pronouncing'

export default defineComponent({
    name: 'TranslateLookupComp',
    data() {
        const translateStore = useTranslateStore()
        const pronounceStore = usePronounceStore()
        return { translateStore, pronounceStore }
    },
    methods: {
        pronounceThis(word: string, lang: string){
            if(!this.pronounceStore.isActive){this.pronounceStore.togglePronouncing()}
            this.pronounceStore.updatePronounceData("text", word)
            this.pronounceStore.updatePronounceData("speakLanguageValue", lang)
        },
        translateThis(word: string, langFrom: number, langTo: number){
            this.translateStore.updateTranslateObject("sourceText", word)
            this.translateStore.updateTranslateObject("fromLangKey", langFrom)
            this.translateStore.updateTranslateObject("toLangKey", langTo)
            this.translateStore.translate()
            this.translateStore.textInput = word
        }
    },
    computed: {
        alternativeDataToText(){
            return this.translateStore.alternativeTranslations
        }
    }
})
</script>

