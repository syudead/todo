<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggle = !toggle" />
      <v-btn icon to="/"><v-icon v-text="'$vuetify.icons.logo'"></v-icon></v-btn>
      <v-toolbar-title>Todo</v-toolbar-title>
      <v-spacer />
      <v-btn icon><v-icon>search</v-icon></v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="toggle" absolute>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>Top</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/about">
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import { Actions } from './store'

export default {
  data() {
    return {
      toggle: null,
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>

<style lang="scss" scoped>
#app {

  p {
    color: blue;
  }
}
</style>
