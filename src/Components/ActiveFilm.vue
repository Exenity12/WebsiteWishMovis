<template>
    <div class="ActiveFilm">
        <BackToList />
        <div class="Film-Information"> 
            <div class="Film-Information__Logo">
                <div class="Film-Information__Logo__Logo-Film">
                    <!-- <img v-bind:src=this.getActiveFilm.poster alt="alt" class="Film-Information__Logo__Logo-Film__Poster"/> -->
                </div>
            </div>
            <div class="Film-Information__Text-Information">
                <div class="Title-Information">
                    <div 
                        class="Text-Information__Name-Film" >
                        {{this.getActiveFilm.title}}
                    </div>
                    <!-- <div class="Duration" v-if="true">
                        <div class="Duration-Info">
                            <div
                                class="Duration-Text"
                                v-for="duration in this.getActiveFilm.collapse.duration" :key="duration">
                                {{duration}}:00
                            </div>
                            <div class="Mini-Logo"></div>
                        </div>
                    </div> -->
                </div>
                <GenresYearActors :item="this.getActiveFilm"/>
            </div>
        </div>
    </div>
</template>
<script>
    import GenresYearActors from "./GenresYearActors.vue"
    import { mapGetters } from 'vuex';
    import BackToList from './BackToList.vue';

    export default {
        computed: mapGetters(["getActiveFilm"]),
        components: {  BackToList, GenresYearActors },
    };

</script>
<style lang="scss">

    .ActiveFilm {
        height: 819px;
        width: 100%;
    }

</style>