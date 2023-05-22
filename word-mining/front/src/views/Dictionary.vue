<template>
    <ControlInstruments />
    <Reverso v-if="reversoIsActive"/>
    <YouGlish v-if="youglishIsActive"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YouGlish from '@/components/YouGlish.vue'
import Reverso from '@/components/Reverso.vue'
import ControlInstruments from '@/components/ControlInstruments.vue'
import useYouglishStore from "@/store/youglish";
import useReversoStore from "@/store/reverso";

export default defineComponent({
    name: 'Dictionary',
    components: { ControlInstruments, YouGlish, Reverso },
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
