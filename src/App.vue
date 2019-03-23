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
  data() {
    return {
      name: 'fuck',
      counter: 0,
    }
  },

  computed: {
    count() {
      return this.counter
    }
  },

  methods: {
    increment() {
      this.counter = this.counter + 1
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
