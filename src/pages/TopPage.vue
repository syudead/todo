<template>
  <v-progress-circular indeterminate v-if="$apollo.loading" />
  <v-list v-else>
    <v-list-tile v-for="todo in allTodoes" :key="todo.id" :to="`/i/${todo.id}`">
      <v-list-tile-title>
        {{ todo.title }}
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
import gql from 'graphql-tag'

const query = gql`
{
  allTodoes {
    id
    title
    body
    createdAt
  }
}
`

export default {
  apollo: {
    allTodoes: query,
  }
}
</script>
