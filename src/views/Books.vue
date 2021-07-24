<template>
  <h1>Book List</h1>
  <ul>
    <li v-for="book in books" :key="book.id">
      <router-link to="/book/:id">{{ book.title }} ({{ book.author.name }})</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        books: []
      }
    }
  }
</script>