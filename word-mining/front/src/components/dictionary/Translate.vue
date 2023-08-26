<template>
    <TitleElement text="Translation"/>
    <v-sheet border rounded="lg" class="pa-5">
        <v-table>
            <tbody>
                <tr>
                    <td>
                        <v-sheet 
                            variant="text"
                            style="text-transform:uppercase; 
                            font-weight: bold; 
                            font-size: larger;"
                            >
                            {{ translation.translatedText }}
                        </v-sheet>
                    </td>
                </tr>
                <tr>
                    <td>
                        <v-card variant="text">
                            {{ explanation }}
                        </v-card>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleElement from '@/components/titles/TitleElement.vue'
import { PropType } from "vue";
import { ITranslateObject } from "@/types";


export default defineComponent({
    name: 'Translate',
    components: { TitleElement },
    props: {
        translation: {
            type: Object as PropType<ITranslateObject>,
                required: true
        },
        explanation: {
            type: String,
            required: true
        }
    }
})
</script>

