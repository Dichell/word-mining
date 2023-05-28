<template>
    <v-container>
        <v-sheet>Alternative translations: </v-sheet> 
        <v-sheet>
            <p v-for="{itemText, itemTrans} in alternativeDataToText"
                ><b>{{ itemText }}</b> : {{ itemTrans }}</p>
        </v-sheet> 
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'TranslateLookupComp',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    },
    computed: {
        alternativeDataToText(){
            return this.translateStore.getAlternativeSreings
        }
    }
})
</script>

