<template>
  <div class="text-xs-center" v-if="$apollo.loading">
    <v-progress-circular indeterminate />
  </div>
  <div v-else>
    <v-list>
      <template v-for="(todo, index) in allTodoes">
        <v-list-tile :to="`/i/${todo.id}`">
          <v-list-tile-content>
            <v-list-tile-title>{{ todo.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ todo.updatedAt | moment }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="index + 1 < allTodoes.length" />
      </template>
    </v-list>

    <v-btn fab fixed bottom right @click="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" @input="v => v || cancel()">
      <v-card>
        <v-container>
          <v-text-field placeholder="Title" prepend-icon="description" v-model="title" />
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn @click="create">Save</v-btn>
        </v-card-actions>
      </v-card>
      <v-alert v-model="alert" dismissible type="error">{{ error }}</v-alert>
    </v-dialog>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import moment from 'moment'

const query = gql`
{
  allTodoes(orderBy: updatedAt_DESC) {
    id
    title
    updatedAt
  }
}
`

const mutation = gql`
mutation($title: String!) {
  createTodo(title: $title, body: "") {
    id
    title
    updatedAt
  }
}
`

export default {
  apollo: {
    allTodoes: query,
  },

  data() {
    return {
      dialog: false,
      title: '',
      alert: false,
      error: null,
    }
  },

  methods: {
    create() {
      this.alert = false

      this.$apollo.mutate({
        mutation,
        variables: {
          title: this.title,
        },
        update: (store, {data: { createTodo }}) => {
          const data = store.readQuery({ query })
          data.allTodoes.unshift(createTodo)
          store.writeQuery({ query, data })
        },
      }).then((data) => {
        // console.log(data)

        this.cancel()
      }).catch((error) => {
        console.log(error)
        this.alert = true
        this.error = error
      })
    },

    cancel() {
      this.dialog = ''
      this.title = ''
      this.alert = false
    }
  },

  filters: {
    moment(time) {
      return moment(time).fromNow()
    }
  }
}
</script>
