<template>
    <v-container>
        <v-row>
            <v-col>
                <ControlPanelComp />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <TranslattionHistory />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="7">
                <TranslateLookupComp />
            </v-col>
            <v-col cols="12" lg="5">
                <PronouncingComp :key=pronounceStore.newTranslationTrigger /> 
            </v-col>
            <!-- <v-col cols="12" md="6">
            </v-col> -->
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
import TranslattionHistory from '@/components/dictionary/TranslattionHistory.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
import TranslateLookupComp from '@/components/dictionary/TranslateLookup.vue'
import TranslateExamples from '@/components/dictionary/TranslateExamples.vue'
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'Dictionary',
    components: { 
        ControlPanelComp, 
        TranslattionHistory, 
        TranslateComp, 
        TranslateLookupComp, 
        TranslateExamples, 
        PronouncingComp 
    },
    data() {
        const pronounceStore = usePronounceStore() 
        return { pronounceStore }
    }
})
</script>
