<template>
        <TitleElement text="Alternative translations"/>
        <v-sheet border rounded="lg" class="pa-5">
            <v-table>
                <tbody>
                    <tr v-if="alternativeTranslations.length < 1">
                        <td>
                                <b>{{translation.translatedText}}</b>
                        </td>
                    </tr>

                    <tr v-for="alternative in alternativeTranslations">
                        <td>
                            <v-btn 
                                density="compact" 
                                variant="text" 
                                @dblclick="translateThis(alternative.displayTarget, targetLang.key, sourceLang.key)"
                                ><b>{{ alternative.displayTarget }}</b>
                            </v-btn>
                        </td>
                        <td>
                            <i :style="{fontSize: 'x-small'}">{{ alternative.posTag }}</i>
                        </td>
                        <td :dir="sourceLang.value == 'hebrew' ? 'rtl' : 'ltr'" >
                            <v-btn 
                                density="compact" v-for="{normalizedText} in alternative.backTranslations"
                                variant="text"
                                @dblclick="translateThis(normalizedText, sourceLang.key, targetLang.key)"
                                >{{ normalizedText }}
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
                <v-tooltip activator="parent" location="top" open-delay="2000"><u>Click:</u> pronounce selected. <u>Double click:</u> translate selected</v-tooltip>
                <v-sheet v-if="alternativeTranslations.length < 1">
                    <i>No variants</i>
                </v-sheet>
            </v-table>
        </v-sheet> 
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import TitleElement from '@/components/titles/TitleElement.vue'
import { IAlternativeTranslations, ITranslateObject, Ilanguages } from "@/types";

export default defineComponent({
    name: 'TranslateLookupComp',
    components: { TitleElement },
    props: {
        translation: {
            type: Object as PropType<ITranslateObject>,
                required: true
        },
        targetLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        sourceLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        alternativeTranslations: {
            type: Object as PropType<IAlternativeTranslations[]>,
            required: true
        }
    },
    methods: {
        translateThis(word: string, langFrom: number, langTo: number){
            this.$emit('translateThis', word, langFrom, langTo)
        }
    }
})
</script>

