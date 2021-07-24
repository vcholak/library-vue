<template>
  <h1>Book Instance List</h1>
  <ul>
    <li v-for="copy in copies" :key="copy.id">
      <router-link to="/books/:id">{{ copy.book.title }} : {{ copy.imprint }} - {{ copy.status }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        copies: []
      }
    }
  }
</script>
