<template>
  <div id="app">
    this is vue {{ name }}
    <ul>
      <li><router-link to="/">top</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <p>color message!</p>
    <button @click="increment()">click!</button>
    <p>count: {{ count }}</p>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Actions } from './store'

export default {
  name: 'TodoLista',
  created() {
    console.log('created')
  },

  data() {
    return {
      name: 'fuck',
      counter: 0,
    }
  },

  computed: {
    ...mapGetters(['count'])
  },

  methods: {
    increment() {
      this.$store.dispatch(Actions.INCREMENT)
    }
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
