<template>
  <div id="app">
    this is vue {{ name }}
    <p>color message!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'fuck',
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
