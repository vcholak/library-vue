import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Books from '@/views/Books.vue';
import Authors from '@/views/Authors.vue';
import Genres from '@/views/Genres.vue';
import Copies from '@/views/Copies.vue';
import CreateBook from '@/views/CreateBook.vue';
import CreateAuthor from '@/views/CreateAuthor.vue';
import CreateGenre from '@/views/CreateGenre.vue';
import CreateCopy from '@/views/CreateCopy.vue';
import BookDetail from '@/views/BookDetail.vue';
import AuthorDetail from '@/views/AuthorDetail.vue';
import GenreDetail from '@/views/GenreDetail.vue';
import BookInstanceDetail from '@/views/BookInstanceDetail.vue';
import NotFound from '@/views/NotFound.vue';

const routes =  [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/books",
      name: "Books",
      component: Books
    },
    {
      path: "/authors",
      name: "Authors",
      component: Authors
    },
    {
      path: "/genres",
      name: "Genres",
      component: Genres
    },
    {
      path: "/bookinstances",
      name: "Copies",
      component: Copies
    },
    {
      path: "/books/create",
      name: "CreateBook",
      component: CreateBook
    },
    {
      path: "/authors/create",
      name: "CreateAuthor",
      component: CreateAuthor
    },
    {
      path: "/genres/create",
      name: "CreateGenre",
      component: CreateGenre
    },
    {
      path: "/bookinstances/create",
      name: "CreateCopy",
      component: CreateCopy
    },
    {
      path: "/books/:id",
      component: BookDetail,
      name: BookDetail
    },
    {
      path: "/authors/:id",
      component: AuthorDetail
    },
    {
      path: "/genres/:id",
      component: GenreDetail
    },
    {
      path: "/bookinstances/:id",
      component: BookInstanceDetail
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
