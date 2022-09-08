<template>
  <AppHeader />
  <div class="Main-Content">
    <router-view/>
  </div>
  <div class="Footer"></div>
</template>
<script>
  import AppHeader from './Components/AppHeader.vue';
  import { mapActions } from 'vuex';
  export default {
    components: {AppHeader},
    methods: {
      ...mapActions(["fetchFilm"]),
    },
    mounted() { 
      this.fetchFilm();
    },
  }
</script>
<style lang="scss">

  $colorBackground: #363232;

  body {
    margin: 0px 0px 0px 0px;
  }

  #app {
    background-color: $colorBackground;
  }

  .Main-Content {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    background-color: $colorBackground;
  }

  .Footer {
    height: 50px;
    background-color: #FA2828;
  }

</style>
