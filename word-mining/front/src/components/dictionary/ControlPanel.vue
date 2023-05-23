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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputForm from '@/components/InputForm.vue'
import ControlInstruments from '@/components/ControlInstruments.vue'
import SelectLang from "@/components/SelectLang.vue";

export default defineComponent({
    name: 'ControlPanel',
    components: { InputForm, ControlInstruments, SelectLang }
})
</script>
