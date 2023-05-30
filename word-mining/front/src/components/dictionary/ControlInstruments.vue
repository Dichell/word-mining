<template>
    <!-- <v-container v-if="!screenSize">
        <v-menu
            open-on-hover
            open-delay="10"
            close-delay="100"
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
                        label=Translation
                        density="compact"
                        color="primary"
                        @click="toogleReversoIsActive"
                        ></v-switch>
                    </v-list-item>
                    <v-list-item>

                    <v-switch class="ml-5"
                        :true-value=true
                        :false-value=false
                        v-model=pronounceIsActive
                        label=Pronouncing  
                        density="compact"
                        color="primary"
                        @click="tooglePronounceIsActive"
                        ></v-switch>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </v-container> //TODO pop menu--> 

    <v-container class="border-primary">
            <v-row>
                <v-col cols="12">
                    <v-row dense>
                        Pronouncing
                    </v-row>
                    <v-row dense>
                        <v-switch class="ml-3"
                            :true-value=true
                            :false-value=false
                            v-model=pronounceIsActive
                            density="compact"
                            color="primary"
                            @click="tooglePronounceIsActive"
                            ></v-switch>
                    </v-row>
                </v-col>
                <!-- <v-col cols="6">
                    <v-row dense>
                        Translation
                    </v-row>
                    <v-row dense>
                        <v-switch class="ml-3"
                        :true-value=true
                        :false-value=false
                        v-model=reversoIsActive
                        density="compact"
                        color="primary"
                        @click="toogleReversoIsActive"
                        ></v-switch>
                    </v-row>
                </v-col> -->
            </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// store
import usePronounceStore from "@/store/pronouncing";

export default defineComponent({
    name: 'ControlInstrumentsComp',
    data() {
        const pronounceStore = usePronounceStore()
        return { pronounceStore }
    },
    methods: {
        tooglePronounceIsActive(): void {
            this.pronounceStore.togglePronouncing()
        }
    },
    computed: {
        pronounceIsActive(): boolean {
            return this.pronounceStore.isActive
        }
    },
    // mounted() {
    //     this.pronounceStore.mountPronouncingIsActive()
    // }
})

//TODO create Switcher components
</script>
