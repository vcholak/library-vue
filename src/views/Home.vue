<template>
  <h1>Local Library Home</h1>
  <p>Welcome to <em>Local Library</em></p>
  <h1>Dynamic content</h1>
  <div v-if="loading" class="loading">
      Loading...
  </div>
  <div v-else-if="errors">
    <p>Errors getting dynamic content:</p>
    <ol>
      <li v-for="err in errors">{{ err }}</li>
    </ol>
  </div>
  <div v-else>
    <p>The library has the following record counts:</p>
    <ul>
      <li><strong>Books:</strong> {{ book_count }} </li>
      <li><strong>Copies:</strong> {{ book_instance_count }}</li>
      <li><strong>Copies available:</strong> {{ book_instance_available_count }}</li>
      <li><strong>Authors:</strong> {{ author_count }}</li>
      <li><strong>Genres:</strong><span v-text="genre_count"></span></li>
    </ul>
  </div>
</template>

<!--script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String,
})

const state = reactive({
  err: false,
  book_count: 0,
  book_instance_count: 0,
  book_instance_available_count: 0,
  author_count: 0,
  genre_count: 0
})
</script-->

<script>
  import BooksService from '@/services/books';
  import AuthorsService from '@/services/authors';
  import GenresService from '@/services/genres';
  import CopiesService from '@/services/copies';

  export default {
    data() {
      return {
        loading: true,
        errors: [],
        book_count: null,
        book_instance_count: null,
        book_instance_available_count: null,
        author_count: null,
        genre_count: null
      }
    },
    mounted () {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = false;

        // BooksService.count2()
        //   .then(getJson)
        //   .then(res => this.book_count = res.count)
        //   .catch(err => {
        //     let msg = 'BooksService: ' + err.message;
        //     console.error(msg);
        //     this.errors.push(msg);
        //   });


        BooksService.count()
          .then(data => this.book_count = data)
          .catch(err => {
            let msg = 'BooksService: ' + err.message;
            console.error(msg);
            this.errors.push(msg);
          });

        AuthorsService.count()
          .then(data => this.author_count = data)
          .catch(err => {
            let msg = 'AuthorsService: ' + err.message;
            console.error(msg);
            this.errors.push(msg);
          });

        GenresService.count()
          .then(data => this.genre_count = data)
          .catch(err => {
            let msg = 'GenresService: ' + err.message;
            console.error(msg);
            this.errors.push(msg);
          });

        CopiesService.count()
          .then(data => this.book_instance_count = data)
          .catch(err => {
            let msg = 'CopiesService: ' + err.message;
            console.error(msg);
            this.errors.push(msg);
          });

        CopiesService.available_count()
          .then(handleErrors)
          .then(res => res.json())
          .then(data => this.book_instance_available_count = data)
          .catch(err => {
            let msg = 'CopiesService: ' + err.message;
            console.error(msg);
            this.errors.push(msg);
          });
      }
    }
  }
</script>

<style scoped>
a {
  color: #42b983;
}
li {
  list-style: none;
}
</style>
