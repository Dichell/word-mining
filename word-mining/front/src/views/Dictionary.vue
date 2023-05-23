<template>
    <ControlPanel />
    <Reverso v-if="reversoIsActive"/>
    <YouGlish v-if="youglishIsActive"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControlPanel from '@/components/dictionary/ControlPanel.vue'
import YouGlish from '@/components/dictionary/YouGlish.vue'
import Reverso from '@/components/dictionary/Reverso.vue'
import useReversoStore from "@/store/reverso";
import useYouglishStore from "@/store/youglish";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlPanel, YouGlish, Reverso },
    data() {
        const youGlishStore = useYouglishStore()
        const reversoStore = useReversoStore()

        return { youGlishStore, reversoStore }
    },
    computed: {
        youglishIsActive(){
            return this.youGlishStore.isActive
        },
        reversoIsActive(){
            return this.reversoStore.isActive
        }
    }
})
</script>
