<template>
    <v-container class="d-flex d-md-none">
        <v-menu
            open-on-hover
            :close-on-content-click="false"
            >
            <template v-slot:activator="{ props }">
                <v-btn
                    class="mt-1"
                    color="primary"
                    v-bind="props"
                    icon="mdi-tune"
                >
                </v-btn>
            </template>
            <v-card min-width="300" class="pa-2">
                <v-list>
                    <v-list-item
                        subtitle="Services:"
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
    </v-container>

    <v-container class="d-none d-md-inline">
            <v-row no-gutters justify="center">
                <v-col cols="6">Youglish</v-col>
                <v-col cols="6">Reverso</v-col>
            </v-row>
            <v-row no-gutters justify="center">
                <v-col cols="6">
                    <v-switch class="ml-5"
                        :true-value=true
                        :false-value=false
                        v-model=youglishIsActive
                        density="compact"
                        color="primary"
                        @click="toogleYouglishIsActive"
                        ></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch class="ml-5"
                        :true-value=true
                        :false-value=false
                        v-model=reversoIsActive
                        density="compact"
                        color="primary"
                        @click="toogleReversoIsActive"
                        ></v-switch>
                </v-col>
            </v-row>
    </v-container>
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
        toogleYouglishIsActive(): void {
            this.youGlishStore.toggleYouglish()
        },
        toogleReversoIsActive(): void {
            this.reversoStore.toggleReverso()
        }
    },
    computed: {
        youglishIsActive(): boolean {
            return this.youGlishStore.isActive
        },
        reversoIsActive(): boolean {
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
