<template>
  <div>
    <h1>Top page</h1>
    <p>{{ allTodoes }}</p>
    <ul>
      <li v-for="todo in allTodoes" :key="todo.id">
        <router-link :to="`/i/${todo.id}`">{{ todo.title }}</router-link>
      </li>
    </ul>
  </div>
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
