<template>
    <v-container>
        <v-row class="d-flex flex-row align-center">
<!-- 
            <v-btn 
                icon="mdi-delete-forever-outline" 
                density="compact" 
                variant="outlined"
                @click="clearHistory">
                    <v-tooltip activator="parent" location="bottom"
                    >clear history</v-tooltip>
            </v-btn> -->
            Last words:
            <v-chip
                class="ma-1"
                v-for="{sourceText, fromLangKey, toLangKey, translatedText} in translateStore.translateHistory"
                @click="translateThis(sourceText, fromLangKey, toLangKey)"
                >
                {{ sourceText }}
                <v-tooltip activator="parent" location="bottom"
                >{{translatedText}}</v-tooltip>
                </v-chip>
            
            <v-tooltip text="clear history" location="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn 
                        v-bind="props"
                        size="small"
                        icon="mdi-close" 
                        density="compact" 
                        variant="outlined"
                        @click="clearHistory"></v-btn>
                </template>
            </v-tooltip>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'TranslattionHistoryComp',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
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
        }}
})
</script>

