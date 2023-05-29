<template>
    <v-container>
        <v-sheet>Translate:</v-sheet> 
        <v-sheet>
            <v-table>
                <tbody>
                    <tr>
                        <td>
                            <v-btn variant="text">{{ translateStore.translateObject.translatedText }}</v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-sheet>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useTranslateStore from '@/store/translate'

export default defineComponent({
    name: 'Translate',
    data() {
        const translateStore = useTranslateStore()
        return { translateStore }
    }
})
</script>

