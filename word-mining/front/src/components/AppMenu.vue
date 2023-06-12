<template>
        <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn size="x-large" v-bind="props">
                <v-icon size="xx-large">mdi-menu</v-icon>
            </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="{name, path, icon} in menu"
                :key=path
                :to=path
                >
                    <template v-slot:prepend>
                        <v-icon :icon=icon></v-icon>
                    </template>
                    <v-list-item-title>{{ name }}</v-list-item-title>
              </v-list-item>
            
              <v-divider></v-divider>
            
              <v-list-item
                to="about">
                    <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGeneralState from '@/store/general'

export default defineComponent({
    name: 'Appbar',
    data() {
        const generalState = useGeneralState()
        return { generalState }
    },
    computed: {
        menu(){
            return this.generalState.menu
        },
        isAuth(): boolean {
            return this.generalState.getIsAuth
        }
    }
})
</script>