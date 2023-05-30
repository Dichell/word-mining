<template>
    <v-container>
        <v-row no-gutters class="d-flex flex-row ">
            <v-col cols="12" md="6">
                <SelectLang />
            </v-col>
            <v-col cols="12" md="6">
                <InputForm />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// components
import InputForm from './InputForm.vue'
import SelectLang from "./SelectLang.vue";

export default defineComponent({
    name: 'ControlPanelComp',
    components: { InputForm, SelectLang }
})
</script>
