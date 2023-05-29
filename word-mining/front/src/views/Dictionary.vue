<template>
    <ControlPanelComp />

    <v-container>
            <v-row>

                <v-col>
                    <v-sheet>
                            <TranslateComp />
                    </v-sheet>
                    
                    <v-sheet>
                            <TranslateExamples />
                    </v-sheet>
                </v-col>

                <v-col>
                        <v-sheet>
                            <PronouncingComp 
                            v-if="pronounceStore.isActive" 
                            :key=pronounceStore.newTranslationTrigger /> 
                            <!-- // key is a way to rerender comp if new word was pased -->        
                        </v-sheet>

                        <v-sheet>
                            <TranslateLookupComp />
                        </v-sheet>
                </v-col>

            </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import ControlPanelComp from '@/components/dictionary/ControlPanel.vue'
import TranslateComp from '@/components/dictionary/Translate.vue'
import TranslateLookupComp from '@/components/dictionary/TranslateLookup.vue'
import TranslateExamples from '@/components/dictionary/TranslateExamples.vue'
import PronouncingComp from '@/components/dictionary/Pronouncing.vue'
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanelComp, TranslateComp, TranslateLookupComp, TranslateExamples, PronouncingComp },
    data() {
        const pronounceStore = usePronounceStore() 
        return { pronounceStore }
    }
})
</script>
