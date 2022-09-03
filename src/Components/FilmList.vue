<template>
    <div class="Film-List" v-for="item in getAllFilm" :key="item.id">
        <div class="Film-List__Film-Information"> 
            <div class="Film-List__Film-Information__Logo">
                <div class="Film-List__Film-Information__Logo__Logo-Film">
                    <!-- <img v-bind:src=item.poster alt="alt" class="Film-List__Film-Information__Logo__Logo-Film__Poster"/> -->
                </div>
            </div>
            <div class="Film-List__Film-Information__Text-Information">
                <router-link 
                    class="Film-List__Film-Information__Text-Information__Name-Film" 
                    v-bind:id=item.id 
                    to="/ActiveFilm"
                    v-model="title"
                    v-on:click="changeActiveFilm"
                >{{item.title}}</router-link>
                <h4 class="Film-List__Film-Information__Text-Information__Year-Genres">
                    {{item.year}}
                    <div v-for="genres in item.genres" :key="genres">, {{genres}}</div>
                    
                </h4>
                <h4 class="Film-List__Film-Information__Text-Information__Director">
                    РЕЖИССЕР:
                    <div v-for="directors in item.directors" :key="directors">{{directors}}</div>
                </h4>
                <div class="Film-List__Film-Information__Text-Information__Acters">
                    <h4 class="Film-List__Film-Information__Text-Information__Acters__Name">АКТЕРЫ:</h4>
                    <div class="Film-List__Film-Information__Text-Information__Acters__Bottom">
                        <h5 class="Film-List__Film-Information__Text-Information__Acters__Item" v-for="actors in item.actors" :key="actors">
                            {{actors}}
                        </h5>
                    </div>
                </div>
                <h3 class="Film-List__Film-Information__Text-Information__About">{{item.description}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
      computed: mapGetters(["getAllFilm"]),
      methods: {
        ...mapActions(["fetchFilm", "updateActiveFilm"]),
        changeActiveFilm() {
            console.log(this.title)
        }
      },
      mounted() {
        this.fetchFilm();
      },
    };
</script>
<style>
    .Film-List__Film-Information{
        display: flex;
        width: 100%;
        background-color: #4D4747;
        margin-bottom: 16px;
    }

    .Film-List__Film-Information__Logo {
        width: 168px;
        min-height: 168px;
        background-color: #E5E5E5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Film-List__Film-Information__Logo__Logo-Film {
        width: 112px;
        height: 168px;
    }

    .Film-List__Film-Information__Logo__Logo-Film__Poster {
        width: 100%;
        height: 100%;
    }

    .Film-List__Film-Information__Text-Information {
        margin: 32px 0px 34px 24px; 
        width: 80%;
    }

    .Film-List__Film-Information__Text-Information__Name-Film {
        text-decoration: none;
        font-family: sans-serif;
        font-style: normal;
        font-size: 27px;
        margin: 0px 0px 5px 0px; 
        color: #FFFFFF;
    }

    .Film-List__Film-Information__Text-Information__Year-Genres {
        font-family: sans-serif;
        font-style: normal;
        margin: 5px 0px 3px 0px; 
        color: #988F8F;
        display: flex;
    }

    .Film-List__Film-Information__Text-Information__Director {
        font-family: sans-serif;
        font-style: normal;
        margin: 5px 0px 3px 0px; 
        color: #988F8F;
        display: flex;
    }

    .Film-List__Film-Information__Text-Information__Acters {
        font-family: sans-serif;
        font-style: normal;
        display: flex;
        margin-top: 5px;
    }

    .Film-List__Film-Information__Text-Information__Acters__Name{
        font-family: sans-serif;
        font-style: normal;
        margin: 0px 0px 3px 0px; 
        color: #988F8F;
    }

    .Film-List__Film-Information__Text-Information__Acters__Bottom{
        max-width: 900px;
    }

    .Film-List__Film-Information__Text-Information__Acters__Item{
        font-family: sans-serif;
        font-style: normal;
        margin: 0px 10px 3px 0px; 
        color: #FFFFFF;
        float: left;
        display: flex;
        white-space: nowrap;
    }

    .Film-List__Film-Information__Text-Information__About{
        margin: 5px 0px 3px 0px; 
        color: #FFFFFF;
        width: 80%;
    }

</style>