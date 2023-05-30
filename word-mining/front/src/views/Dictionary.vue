<template>
    <v-container>
        <TranslattionHistory />
        <v-row>
            <v-col cols="6">
                <ControlPanelComp />
                <PronouncingComp :key=pronounceStore.newTranslationTrigger /> 
            </v-col>
            <v-col cols="6">
                <TranslateLookupComp />
            </v-col>
        </v-row>
        <TranslateExamples />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import ControlPanelComp from '@/components/dictionary/ControlPanel.vue'
import TranslattionHistory from '@/components/dictionary/TranslattionHistory.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
import TranslateLookupComp from '@/components/dictionary/TranslateLookup.vue'
import TranslateExamples from '@/components/dictionary/TranslateExamples.vue'
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanelComp, TranslattionHistory, TranslateComp, TranslateLookupComp, TranslateExamples, PronouncingComp },
    data() {
        const pronounceStore = usePronounceStore() 
        return { pronounceStore }
    }
})
</script>
