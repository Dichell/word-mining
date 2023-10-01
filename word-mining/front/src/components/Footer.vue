<template>
    <v-footer
        style="width: 100vw;"
        color="primary"
        >
            <v-row class="align-center justify-center">
                <v-col class="text-btn" >
                    <v-btn
                        density="compact"
                        color="primary"
                        variant="flat"
                        >
                        WORDS MINING
                    </v-btn>
                    <v-btn
                        v-for="{name, path} in menu"
                        density="compact"
                        color="primary"
                        variant="flat"
                        :text=name
                        >
                    </v-btn>
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