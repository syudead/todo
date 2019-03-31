<template>
  <v-progress-circular indeterminate v-if="$apollo.loading" />
  <div v-else>
    <v-subheader class="display-1">{{ todo.title }}</v-subheader>
    <v-layout row wrap>
      <v-flex md6 xs12>
        <v-textarea v-model="input" solo/>
        <button @click="update">更新</button>
      </v-flex>
      <v-flex md6 xs12>
        <div v-html="compiledMarkdown"></div>
      </v-flex>
    </v-layout>
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
