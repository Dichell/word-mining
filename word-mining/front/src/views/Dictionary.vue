<template>
    <v-container class="d-flex align-content-start flex-row">
        <v-row no-gutters>
            <v-col cols="2" md="1">
                <ControlInstruments />
            </v-col>
            <v-col cols="10" md="6">
                <InputForm />
            </v-col>
            <v-col md="5">
                <SelectLang />
            </v-col>
        </v-row>
    </v-container>
    <Reverso v-if="reversoIsActive"/>
    <YouGlish v-if="youglishIsActive"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputForm from '@/components/InputForm.vue'
import ControlInstruments from '@/components/ControlInstruments.vue'
import SelectLang from "@/components/SelectLang.vue";
import YouGlish from '@/components/YouGlish.vue'
import Reverso from '@/components/Reverso.vue'
import useYouglishStore from "@/store/youglish";
import useReversoStore from "@/store/reverso";

export default defineComponent({
    name: 'Dictionary',
    components: { InputForm, ControlInstruments, SelectLang, YouGlish, Reverso },
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
