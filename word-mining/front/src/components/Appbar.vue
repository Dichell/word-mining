<template>
      <v-app-bar
        color="primary"
        density="compact"
      >

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

        <v-row class="d-flex justify-space-between align-center">
            <v-col class="d-flex">
                <v-app-bar-title class="d-none d-sm-flex justify-center">
                    Words Mining
                </v-app-bar-title>
            </v-col>
            
            <v-col class="d-flex justify-end">
                <v-btn
                    size="large"
                    v-for="({name, path, icon}, index) in menu"
                    :to=path
                    :key=index
                    >
                    <v-icon size="x-large">{{icon}}</v-icon>
                        <v-tooltip
                            activator="parent"
                            location="bottom"
                        >{{name}}</v-tooltip>
                </v-btn>
                <v-divider vertical></v-divider>

                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn size="x-large" v-bind="props">
                            <v-icon size="xx-large">mdi-account-circle</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                            >
                                <v-list-item-title v-if="isAuth" >Sign out</v-list-item-title>
                                <v-list-item-title v-else >Log out</v-list-item-title>
                        </v-list-item>
                        
                        <v-divider></v-divider>
                        
                        <v-list-item
                            >
                                <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-col>
        </v-row>
      </v-app-bar>
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