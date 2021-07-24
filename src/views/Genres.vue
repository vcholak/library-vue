<template>
  <h1>Genre List</h1>
  <ul>
    <li v-for="genre in genres" :key="genre.id">
      <router-link to="/genre/:id">{{ genre.name }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        genres: []
      }
    }
  }
</script>