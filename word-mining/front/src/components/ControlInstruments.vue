<template>
    <v-sheet>ControlInstruments</v-sheet> 
    <v-row class="d-flex justify-start">
        <v-col>
            <v-switch 
                :true-value=true
                :false-value=false
                v-model=reversoIsActive
                label=Reverso
                color="primary"
                @click="toogleReversoIsActive"
                ></v-switch>
        </v-col>
        <v-col>
            <v-switch 
                :true-value=true
                :false-value=false
                v-model=youglishIsActive
                label=YouGlish  
                color="primary"
                @click="toogleYouglishIsActive"
                ></v-switch>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useYouglishStore from "@/store/youglish";
import useReversoStore from "@/store/reverso";

export default defineComponent({
    name: 'ControlInstruments',
    data() {
        const youGlishStore = useYouglishStore()
        const reversoStore = useReversoStore()

        return { youGlishStore, reversoStore }
    },
    methods: {
        toogleYouglishIsActive(){
            this.youGlishStore.toggleYouglish()
        },
        toogleReversoIsActive(){
            this.reversoStore.toggleReverso()
        }
    },
    computed: {
        youglishIsActive(){
            return this.youGlishStore.getIsActive
        },
        reversoIsActive(){
            return this.reversoStore.isActive
        }
    },
    mounted() {
        this.youGlishStore.mountYouglishIsActive()
        this.reversoStore.mountRevesohIsActive()
    }
})

//TODO create Switcher components
</script>
