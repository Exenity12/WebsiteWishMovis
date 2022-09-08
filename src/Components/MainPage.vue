<template>
    <h1 class="Main-Content__Name">Фильмы</h1>
    <ListOfFilters />
    <AppLoader v-if="getLoaderStatus"/>
    <FilmList />
</template>
<script>

    import ListOfFilters from './ListOfFilters.vue';
    import FilmList from './FilmList.vue';
    import AppLoader from './AppLoader.vue'
    import { mapGetters } from 'vuex';

    export default {
      computed: mapGetters(["getLoaderStatus"]),
      components: {
        ListOfFilters, FilmList, AppLoader,
      },
    };

</script>
<style lang="scss">

  .Main-Content__Name {
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
  }

</style>