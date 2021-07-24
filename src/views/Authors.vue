<template>
  <h1>Author List</h1>
  <ul>
    <li v-for="author in authors" :key="author.id">
      <router-link to="/author/:id">{{ author.name }} ({{ author.lifespan }})</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        authors: []
      }
    }
  }
</script>