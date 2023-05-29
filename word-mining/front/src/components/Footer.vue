<template>
    <v-footer
        color="primary"
        >
            <v-row class="align-center">

                <v-col class="text-btn" >
                    WORD MINING
                </v-col>
                
                <v-col>
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