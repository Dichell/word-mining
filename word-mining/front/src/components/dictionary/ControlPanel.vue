<template>
        <v-row no-gutters class="d-flex flex-row">
            <v-col cols="12" md="6">
                <InputForm 
                    v-model=inputedText
                    @clickedTranslate="$emit('clickedTranslate')"
                    />
            </v-col>
            <v-col cols="12" md="6">
                <SelectLang />
            </v-col>
        </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueTypes from "vue-types";
import InputForm from './InputForm.vue'
import SelectLang from "./SelectLang.vue";

export default defineComponent({
    name: 'ControlPanelComp',
    components: { InputForm, SelectLang },
    props: {
        inputText: VueTypes.string.isRequired
    },
    computed: {
        inputedText: {
            get(): string{
                return this.inputText
            },
            set(val: string){
                this.$emit('inputChanged', 'textInput', val)
            }
        }
    }
})
</script>
