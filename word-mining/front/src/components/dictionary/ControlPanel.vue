<template>
        <v-row no-gutters class="d-flex flex-row">
            <v-col cols="12" md="6">
                <InputForm 
                    v-model=inputedText
                    @clickedTranslate="$emit('clickedTranslate')"
                    />
            </v-col>
            <v-col cols="12" md="6">
                <SelectLang 
                    v-model="sourceTargetLang"
                    :languages="languages"
                    @replaceLangs="$emit('replaceLangs')"
                    />
            </v-col>
        </v-row>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import VueTypes from "vue-types";
import InputForm from './InputForm.vue'
import SelectLang from "./SelectLang.vue";
import { ISelectLang, Ilanguages } from "@/types";

export default defineComponent({
    name: 'ControlPanelComp',
    components: { InputForm, SelectLang },
    props: {
        inputText: VueTypes.string.isRequired,
        sourceLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        targetLang: {
            type: Object as PropType<Ilanguages>,
            required: true
        },
        languages: Object as PropType<Ilanguages[]>,
    },
    computed: {
        inputedText: {
            get(): string{
                return this.inputText
            },
            set(val: string){
                this.$emit('inputChanged', 'textInput', val)
            }
        },
        sourceTargetLang: {
            get(): ISelectLang {
                return { 
                    sourceLang: this.sourceLang, 
                    targetLang: this.targetLang
                }
            },
            set(val: any){
                this.$emit('sourceTargetLangs', val.key, val.value.key)
            }
        }
    }
})
</script>
