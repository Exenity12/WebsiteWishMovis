<template>
    <h1 class="Main-Content__Name">Фильмы</h1>
    <ListOfFilters />
    <FilmList />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from './AppHeader.vue';
import ListOfFilters from './ListOfFilters.vue';
import FilmList from './FilmList.vue';

@Options({
  components: {
    AppHeader, ListOfFilters, FilmList
  },
})
export default class HomeView extends Vue {}
</script>
<style>

    .Main-Content__Name {
        color: #FFFFFF;
        font-family: 'Roboto';
        font-style: normal;
    }

</style>
