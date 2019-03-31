<template>
  <div class="text-xs-center" v-if="$apollo.loading">
    <v-progress-circular indeterminate />
  </div>
  <v-list v-else>
    <template v-for="(todo, index) in allTodoes">
      <v-list-tile :to="`/i/${todo.id}`">
        <v-list-tile-title>
          {{ todo.title }}
        </v-list-tile-title>
      </v-list-tile>
      <v-divider v-if="index + 1 < allTodoes.length" />
    </template>
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
