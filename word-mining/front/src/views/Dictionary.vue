<template>
    <v-container>
        <v-row no-gutters class="d-flex flex-row ">

            <v-col class="order-md-2" cols="12" md="5">
                <InputForm />
            </v-col>
            <v-col class="order-md-1" cols="2" md="2">
                <ControlInstruments />
            </v-col>
            <v-col class="order-md-4" cols="10" md="5">
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
import BtnQuad from '@/components/buttons/BtnQuad.vue'
import useGeneralStore from "@/store/general";
import useYouglishStore from "@/store/youglish";
import useReversoStore from "@/store/reverso";

export default defineComponent({
    name: 'Dictionary',
    components: { InputForm, ControlInstruments, SelectLang, YouGlish, Reverso, BtnQuad },
    data() {
        const generalStore = useGeneralStore()
        const youGlishStore = useYouglishStore()
        const reversoStore = useReversoStore()

        return { generalStore, youGlishStore, reversoStore }
    },
    methods: {
        sendToStore(): void {
            this.generalStore.setSourceText()
        }
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
