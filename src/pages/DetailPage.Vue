<template>
  <div>
    <h3>detail page</h3>
    <div v-if="$apollo.loading">
      loading...
    </div>
    <div v-else>
      <p>{{ todo.title }}</p>
      <p>{{ todo.body }}</p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const query = gql`
query($id: ID!) {
  todo: Todo(id: $id) {
    id
    title
    body
  }
}
`

export default {
  apollo: {
    todo: {
      query,
      variables() {
        const id = this.$route.params.id
        return { id }
      }
    },
  }
}
</script>
