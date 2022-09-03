<template>
  <AppHeader />
  <div class="Main-Content">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from './Components/AppHeader.vue';
import ListOfFilters from './Components/ListOfFilters.vue';
import FilmList from './Components/FilmList.vue';

@Options({
components: {
  AppHeader, ListOfFilters, FilmList
},
})
export default class HomeView extends Vue {}
</script>
<style>
  body {
      margin: 0px 0px 0px 0px;
  }

  #app {
      background-color: #363232;
      min-height: 1000px;
  }

  .Main-Content {
      margin-left: 15%;
      width: 70%;
      background-color: #363232;
  }

  .Main-Content__Name {
      color: #FFFFFF;
      font-family: 'Roboto';
      font-style: normal;
  }

</style>
