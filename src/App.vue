<template>
  <div id="app">
    this is vue {{ name }}
    <p>color message!</p>
    <button @click="increment()">click!</button>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
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
    count() {
      return this.$store.state.count
    }
  },

  methods: {
    increment() {
      this.$store.commit('increment')
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
