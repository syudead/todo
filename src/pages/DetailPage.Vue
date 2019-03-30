<template>
  <div>
    <h3>detail page</h3>
    <div v-if="$apollo.loading">
      loading...
    </div>
    <div v-else>
      <p>{{ todo.title }}</p>
      <textarea v-model="input"></textarea>
      <button v-on:click="update">更新</button>
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import marked from 'marked'

const query = gql`
query($id: ID!) {
  todo: Todo(id: $id) {
    id
    title
    body
  }
}
`

const mutation = gql`
mutation($id: ID!, $title: String, $body: String) {
  updateTodo(id: $id, title: $title, body: $body) {
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
        return { id: this.id }
      },
      result({ data }) {
        this.input = data.todo.body
      },
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      input: '',
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, {sanitize: true})
    }
  },
  methods: {
    update(e) {
      this.$apollo.mutate({
        mutation,
        variables: {
          id: this.id,
          body: this.input,
        },
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
