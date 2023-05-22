<template>
    <InputForm />
    <ControlInstruments />
    <Reverso v-if="reversoIsActive"/>
    <YouGlish v-if="youglishIsActive"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputForm from '@/components/InputForm.vue'
import ControlInstruments from '@/components/ControlInstruments.vue'
import YouGlish from '@/components/YouGlish.vue'
import Reverso from '@/components/Reverso.vue'
import useYouglishStore from "@/store/youglish";
import useReversoStore from "@/store/reverso";

export default defineComponent({
    name: 'Dictionary',
    components: { InputForm, ControlInstruments, YouGlish, Reverso },
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
