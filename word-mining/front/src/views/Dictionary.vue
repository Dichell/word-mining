<template>
    <ControlPanel />
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col v-if="translateStore.isActive">
                <Translate />
            </v-col>
            <v-col v-if="youGlishStore.isActive">
                <YouGlish :key=youGlishStore.newTranslationTrigger /> 
                <!-- // key is a way to rerender comp if new word was pased -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControlPanel from '@/components/dictionary/ControlPanel.vue'
import YouGlish from '@/components/dictionary/YouGlish.vue'
import Translate from '@/components/dictionary/Translate.vue'
import useTranslateStore from "@/store/translate";
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanel, YouGlish, Translate },
    data() {
        const youGlishStore = useYouglishStore() 
        const translateStore = useTranslateStore()

        return { youGlishStore, translateStore }
    }
})
</script>
