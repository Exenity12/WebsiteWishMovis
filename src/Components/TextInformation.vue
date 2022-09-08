<template>
    <div>
      <TitleInformation :item="item"/>
      <GenresYearActors :item="item"/>
    </div>
</template>
<script>

    import TitleInformation from "./TitleInformation.vue"
    import GenresYearActors from "./GenresYearActors.vue"
    import { mapActions, mapGetters } from 'vuex';

    export default {
      computed: mapGetters(["getAllFilm"]),
      props: ["item"],
      components: { GenresYearActors, TitleInformation },
      methods: {
        ...mapActions(["updateActiveFilm"]),
        changeActiveFilm(e) {
            this.updateActiveFilm(this.getAllFilm.find(item => item.id == e.target.id))
        },
      },
    };
</script>

