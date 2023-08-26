<template>
    <v-container v-if="translateHistory && translateHistory.length > 0" style="position: relative; top: -20px;">
        <v-row align="center">
            <v-col style="max-width: fit-content;">
                <v-tooltip text="clear history" location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn 
                            v-bind="props"
                            size="small"
                            icon="mdi-close" 
                            density="compact" 
                            variant="text"
                            color="red"
                            @click="$emit('clearHistory')"></v-btn>
                    </template>
                </v-tooltip>
                Last words:
            </v-col>
            <v-col>
                <v-row class="d-flex flex-row justify-start align-center">
                    <div style="overflow-x:auto; white-space: nowrap;">
                        <v-chip
                            v-for="pair in translateHistory"
                            closable
                            close-icon="mdi-close"
                            class="mx-1 mb-3"
                            :key="pair.key"
                            @click.prevent="$emit('translateThis', {...pair})"
                            @click:close="$emit('deleteChip', {...pair})"
                            >{{ pair.sourceText }}
                                <v-tooltip activator="parent" location="bottom">
                                    {{pair.translatedText}}
                                </v-tooltip>
                        </v-chip>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue";
import { ITranslateHistory } from "@/types";

export default defineComponent({
    name: 'TranslattionChipsCompp',
    props: {
        translateHistory: {
            type: Object as PropType<ITranslateHistory[]>,
            required: true
        }
    }
})
</script>

