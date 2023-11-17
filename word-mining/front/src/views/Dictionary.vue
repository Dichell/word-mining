<template>
    <v-container>
        <v-row>
            <v-col>
                <ControlPanelComp 
                    :input-text="inputText"
                    @inputChanged="updateStore"
                    @clickedTranslate="sendToStore"
                    :source-lang="sourceLang"
                    :target-lang="targetLang"
                    :languages="languages"
                    @sourceTargetLangs="updateTranslateObject"
                    @replaceLangs="replaceLangs"
                    />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <TranslattionChipsComp 
                    :translate-history="translateHistory"
                    @clearHistory="clearHistory"
                    @translateThis="translateThis"
                    @deleteChip="deleteChip"
                    />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="7">
                <TranslateComp 
                    :translation="translation"
                    :explanation="translateExplanation"
                    />
                <TranslateLookupComp 
                    :translation="translation"
                    :source-lang="sourceLang"
                    :target-lang="targetLang"
                    :alternative-translations="translateAlternatives"
                    @translateThis="translateThis"
                    />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <TranslateExamples :examples="translateExamples"/>
            </v-col>
        </v-row>
        <v-row class="ma-2"></v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import ControlPanelComp from '@/components/dictionary/ControlPanel.vue'
import TranslattionChipsComp from '@/components/dictionary/TranslattionChips.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
import TranslateLookupComp from '@/components/dictionary/TranslateLookup.vue'
import TranslateExamples from '@/components/dictionary/TranslateExamples.vue'
// store
import usePronounceStore from "@/store/pronouncing";
import useTranslateStore from '@/store/translate'
import { 
    IAlternativeTranslations,
    IExamplesTranslations, 
    ITranslateHistory, 
    ITranslateObject, 
    Ilanguages, 
    UpdatableTranslateStore 
} from "@/types";

export default defineComponent({
    name: 'Dictionary',
    components: { 
        ControlPanelComp, 
        TranslattionChipsComp, 
        TranslateComp, 
        TranslateLookupComp, 
        TranslateExamples, 
    },
    data() {
        const pronounceStore = usePronounceStore() 
        const translateStore = useTranslateStore()
        return { pronounceStore, translateStore }
    },
    computed: {
        inputText(): string { return this.translateStore.getInputText },
        sourceLang(): Ilanguages { return this.translateStore.getSourceLang },
        targetLang(): Ilanguages { return this.translateStore.getTargetLang },
        languages(): Ilanguages[] { return this.translateStore.languages },
        translateHistory(): ITranslateHistory[] { return this.translateStore.getHistory },
        translation(): ITranslateObject { return this.translateStore.getTranslateObject },
        translateAlternatives(): IAlternativeTranslations[] { return this.translateStore.getAlternatives },
        translateExplanation(): string { return this.translateStore.getExplain },
        translateExamples(): IExamplesTranslations[] { return this.translateStore.getExamples },
    },
    methods: {
        updateStore(key: keyof UpdatableTranslateStore, val: UpdatableTranslateStore[typeof key]) {
            this.translateStore.updateTranslateState(key, val)
        },
        updateTranslateObject(key: keyof ITranslateObject, val: ITranslateObject[typeof key]){
            this.translateStore.updateTranslateObject(key, val)
        },
        sendToStore() {
            this.translateStore.updateTranslateObject("sourceText", this.translateStore.textInput)
            this.translateStore.translate()
            this.pronounceStore.updatePronounceData("text", this.translateStore.textInput)
        },
        replaceLangs(): void {
            this.translateStore.reverseLangs()
            this.pronounceStore.togglePronounceLang()
        },
        clearHistory(){
            this.translateStore.deleteAllHistory()
        },
        translateThis(text: string, langFrom: number, langTo: number){
            this.translateStore.updateTranslateObject("sourceText", text)
            this.translateStore.updateTranslateObject("fromLangKey", langFrom)
            this.translateStore.updateTranslateObject("toLangKey", langTo)
            this.translateStore.translate()
            this.pronounceStore.refillPronDataFromTranslateSource()
            this.pronounceStore.triggerRefresh()
        },
        deleteChip(val: ITranslateHistory){
            this.translateStore.deleteOneFromHistory(val.key)
        },
    },
    mounted() {
        this.translateStore.mountBaseTranslateSettings()
    },
})
</script>
