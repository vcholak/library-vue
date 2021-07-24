<template>
    <div class="col-sm-2">
        <ul class='sidebar-nav'>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/books">All books</router-link>
            </li>
            <li>
                <router-link to="/authors">All authors</router-link>
            </li>
            <li>
                <router-link to="/genres">All genres</router-link>
            </li>
            <li>
                <router-link to="/bookinstances">All book instances</router-link>
            </li>
            <li><hr/></li>
            <li>
                <router-link to="/authors/create">Create new author</router-link>
            </li>
            <li>
                <router-link to="/genres/create">Create new genre</router-link>
            </li>
            <li>
                <router-link to="/books/create">Create new book</router-link>
            </li>
            <li>
                <router-link to="/bookinstances/create">Create new book instance (copy)</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>

<style scoped>
.sidebar-nav {
    margin-top: 20px;
    padding: 0;
    list-style: none;
}
</style>
