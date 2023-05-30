<template>
    <v-footer
        style="position: absolute; bottom: -1px; width: 100vw;"
        color="primary"
        >
            <v-row class="align-center justify-center">

                <v-col class="text-btn" >
                    WORD MINING
                </v-col>
                
                <v-col cols="8" class="d-flex justify-center">
                    <v-btn
                        v-for="{name, path} in menu"
                        density="compact"
                        color="primary"
                        variant="flat"
                        :text=name
                        >
                    </v-btn>
                </v-col>

                <v-col>
                </v-col>

            </v-row>
    </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralState from '@/store/general'

export default defineComponent({
    name: 'Footer',
    data() {
        const generalState = useGeneralState()
        return { generalState }
    },
    computed: {
        menu(){
            return this.generalState.menu
        }
    }
})
</script>