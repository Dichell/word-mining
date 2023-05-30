<template>
    <v-container>
        <v-row no-gutters class="d-flex flex-row ">
            <v-col class="order-md-2" cols="12" md="4">
                <InputForm />
            </v-col>
            <v-col class="order-md-1" cols="3" md="2">
                <ControlInstruments />
            </v-col>
            <v-col class="order-md-4" cols="9" md="6">
                <SelectLang />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import InputForm from './InputForm.vue'
import ControlInstruments from './ControlInstruments.vue'
import SelectLang from "./SelectLang.vue";

export default defineComponent({
    name: 'ControlPanelComp',
    components: { InputForm, ControlInstruments, SelectLang }
})
</script>
