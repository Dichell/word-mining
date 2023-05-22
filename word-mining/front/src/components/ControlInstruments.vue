<template>
    <v-menu
        open-on-hover
        :close-on-content-click="false"
        >
        <template v-slot:activator="{ props }">
            <v-btn
                class="mt-3"
                color="primary"
                v-bind="props"
                icon="mdi-tune"
            >
            </v-btn>
        </template>
        <v-card min-width="300" class="pa-2">
            <v-list>
                <v-list-item
                    subtitle="Use instrumens:"
                ></v-list-item>
                <v-list-item>
                    <v-switch class="ml-5"
                    :true-value=true
                    :false-value=false
                    v-model=reversoIsActive
                    label=Reverso
                    density="compact"
                    color="primary"
                    @click="toogleReversoIsActive"
                    ></v-switch>
                </v-list-item>
                <v-list-item>

                <v-switch class="ml-5"
                    :true-value=true
                    :false-value=false
                    v-model=youglishIsActive
                    label=YouGlish  
                    density="compact"
                    color="primary"
                    @click="toogleYouglishIsActive"
                    ></v-switch>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
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
            return this.youGlishStore.isActive
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
