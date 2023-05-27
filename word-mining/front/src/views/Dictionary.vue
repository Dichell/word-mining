<template>
    <ControlPanel />
    <v-container class="d-flex flex-column justify-center">
        <Translate />
            <YouGlish 
                v-if="youGlishStore.isActive" 
                :key=youGlishStore.newTranslationTrigger /> 
            <!-- // key is a way to rerender comp if new word was pased -->
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControlPanel from '@/components/dictionary/ControlPanel.vue'
import YouGlish from '@/components/dictionary/YouGlish.vue'
import Translate from '@/components/dictionary/Translate.vue'
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanel, YouGlish, Translate },
    data() {
        const youGlishStore = useYouglishStore() 
        return { youGlishStore }
    }
})
</script>
