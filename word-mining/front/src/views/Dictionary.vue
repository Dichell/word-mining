<template>
    <ControlPanelComp />
    <TranslattionHistory />
    <v-container>
        <v-row>
            <v-col>
                <TranslateLookupComp />
                <TranslateExamples />
            </v-col>
            <v-col>
                <!-- <TranslateComp /> -->
                <PronouncingComp 
                v-if="pronounceStore.isActive" 
                :key=pronounceStore.newTranslationTrigger /> 
                <!-- // key is a way to rerender comp if new word was pased -->  
            </v-col>
        </v-row>
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
