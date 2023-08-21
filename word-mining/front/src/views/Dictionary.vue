<template>
    <v-container>
        <v-row>
            <v-col>
                <ControlPanelComp 
                    :input-text="inputText"
                    @inputChanged="updateStore"
                    @clickedTranslate="sendToStore"
                    />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <TranslattionChipsComp />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="7">
                <TranslateComp />
                <TranslateLookupComp />
            </v-col>
            <v-col cols="12" lg="5">
                <PronouncingComp :key=pronounceStore.newTranslationTrigger /> 
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <TranslateExamples cols="12" />
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
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
// store
import usePronounceStore from "@/store/pronouncing";
import useTranslateStore from '@/store/translate'
import { UpdatableTranslateStore } from "@/types";

export default defineComponent({
    name: 'Dictionary',
    components: { 
        ControlPanelComp, 
        TranslattionChipsComp, 
        TranslateComp, 
        TranslateLookupComp, 
        TranslateExamples, 
        PronouncingComp 
    },
    data() {
        const pronounceStore = usePronounceStore() 
        const translateStore = useTranslateStore()
        return { pronounceStore, translateStore }
    },
    computed: {
        inputText(){ return this.translateStore.getInputText }
    },
    methods: {
        updateStore(key: keyof UpdatableTranslateStore, val: UpdatableTranslateStore[typeof key]) {
            this.translateStore.updateTranslateState(key, val)
        },
        sendToStore() {
            this.translateStore.updateTranslateObject("sourceText", this.translateStore.textInput)
            this.translateStore.translate()
            this.pronounceStore.updatePronounceData("text", this.translateStore.textInput)
        }
    }
})
</script>
