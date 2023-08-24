<template>
    <v-row no-gutters class="ma-2">
        <v-col class="d-flex align-center mt-1">
            <v-select
                label="from"
                variant="outlined"
                hide-details="auto"
                rounded="s-xl"
                return-object
                v-model=sourceLang
                item-title="name"
                :items=languages
            ></v-select>
            <v-btn 
                height="50px" 
                variant="tonal"
                rounded="0"
                @click="$emit('replaceLangs')"   
                >
                <v-icon color="primary" size="large">mdi-arrow-u-left-bottom</v-icon>
            </v-btn>
            <v-select
                label="to"
                variant="outlined"
                hide-details="auto"
                rounded="e-xl"
                return-object
                v-model=targetLang
                item-title="name"
                :items=languages
            ></v-select>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { ISelectLang, Ilanguages } from "@/types";

export default defineComponent({
    name: 'SelectLang',
    props:{
        modelValue:  {
            type: Object as PropType<ISelectLang>,
            required: true
        },
        languages: Object as PropType<Ilanguages[]>,
    },
    computed: {
        sourceLang: {
            get(){ 
                return this.modelValue.sourceLang
            },
            set(val: Ilanguages) {
                this.$emit('update:modelValue', {key:'fromLangKey', value: val})
            }
        },
        targetLang: {
            get(){ 
                return this.modelValue.targetLang
            },
            set(val: Ilanguages) {
                this.$emit('update:modelValue', {key: 'toLangKey', value: val})
            }
        },
    }
})
</script>

