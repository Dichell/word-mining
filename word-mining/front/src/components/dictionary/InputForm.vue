<template>
    <v-row>
        <v-col class="ma-2">
            <v-text-field
                clearable
                hide-details
                bg-color="blue-lighten-5"
                type="text"
                rounded="lg"
                variant="outlined"
                v-model=inputText
                @keyup.enter="startTranslate"
                >
                <template v-slot:append>
                    <v-sheet >
                        <BtnSearchWord @click="startTranslate"/>
                    </v-sheet>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BtnSearchWord from './BtnSearchWord.vue'
import VueTypes from "vue-types";

export default defineComponent({
    name: 'InputForm',
    components: { BtnSearchWord },
    props: {
        modelValue: VueTypes.string.isRequired
    },
    computed: {
        inputText:{
            get(): string{
                return this.modelValue
            },
            set(val: string){
                this.$emit('update:modelValue', val)
            }
        }
    },
    methods: {
        startTranslate(){
            this.$emit('clickedTranslate')
        }
    }
})
</script>

<style>
  .v-text-field input {
    font-size: 1.2em;
  }
</style>