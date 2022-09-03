<template>
    <div>
        <appHeader />
        <div class="Main-Content">
            <BackToList />
            <div class="Film-Information"> 
                <div class="Film-Information__Logo">
                    <div class="Film-Information__Logo__Logo-Film">
                        <!-- <img v-bind:src=item.poster alt="alt" class="Film-Information__Logo__Logo-Film__Poster"/> -->
                    </div>
                </div>
                <div class="Film-Information__Text-Information">
                    <h2 class="Film-Information__Text-Information__Name-Film" v-bind:id=this.getActiveFilm.id>{{this.getActiveFilm.title}}</h2>
                    <h4 class="Film-Information__Text-Information__Year-Genres">
                        {{this.getActiveFilm.year}}
                        <div v-for="genres in this.getActiveFilm.genres" :key="genres">, {{genres}}</div>
                    </h4>
                    <h4 class="Film-Information__Text-Information__Director">
                        РЕЖИССЕР:
                        <div 
                            class="Text-Information__Director__Name" 
                            v-for="directors in this.getActiveFilm.directors" :key="directors">
                            {{directors}}
                        </div>
                    </h4>
                    <div class="Film-Information__Text-Information__Acters">
                        <h4 class="Film-Information__Text-Information__Acters__Name">АКТЕРЫ:</h4>
                        <div class="Film-Information__Text-Information__Acters__Bottom">
                            <h5 class="Film-Information__Text-Information__Acters__Item" v-for="actors in this.getActiveFilm.actors" :key="actors">
                                {{actors}}
                            </h5>
                        </div>
                    </div>
                    <h3 class="Film-Information__Text-Information__About">{{this.getActiveFilm.description}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
    import AppHeader from './AppHeader.vue';
    import BackToList from './BackToList.vue';
    export default {
        computed: mapGetters(["getActiveFilm"]),
        components: { AppHeader, BackToList },
    };
</script>