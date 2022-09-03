<template>
    <div
        v-for="item in getAllFilm" :key="item.id">
        <div class="Film-Information"> 
            <div class="Film-Information__Logo">
                <div class="Film-Information__Logo__Logo-Film">
                    <img v-bind:src=item.poster alt="alt" class="Film-Information__Logo__Logo-Film__Poster"/>
                </div>
            </div>
            <div class="Film-Information__Text-Information">
                <router-link 
                    class="Film-Information__Text-Information__Name-Film" 
                    v-bind:id=item.id 
                    to="/ActiveFilm"
                    v-model=item.title
                    v-on:click="changeActiveFilm($event)"
                >{{item.title}}</router-link>
                <h4 class="Film-Information__Text-Information__Year-Genres">
                    {{item.year}}
                    <div v-for="genres in item.genres" :key="genres">, {{genres}}</div>
                    
                </h4>
                <h4 class="Film-Information__Text-Information__Director">
                    РЕЖИССЕР:
                    <div class="Text-Information__Director__Name" v-for="directors in item.directors" :key="directors">{{directors}}</div>
                </h4>
                <div class="Film-Information__Text-Information__Acters">
                    <h4 class="Film-Information__Text-Information__Acters__Name">АКТЕРЫ:</h4>
                    <div class="Film-Information__Text-Information__Acters__Bottom">
                        <h5 class="Film-Information__Text-Information__Acters__Item" v-for="actors in item.actors" :key="actors">
                            {{actors}}
                        </h5>
                    </div>
                </div>
                <h3 class="Film-Information__Text-Information__About">{{item.description}}</h3>
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
        changeActiveFilm(e) {
            this.updateActiveFilm(this.getAllFilm.find(item => item.id == e.target.id))
        },
      },
      mounted() {
        this.fetchFilm();
      },
      data(){
            return {
                mouseOver: 0,
                mouseOut: 0,
            }
        },
    };
</script>
<style>
    
    .Film-Information {
        display: flex;
        width: 100%;
        background-color: #4D4747;
        margin-bottom: 16px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    }

    .Film-Information:hover {
        transform: translateY(-8px);
    }

    .Film-Information__Logo {
        width: 168px;
        min-height: 168px;
        background-color: #E5E5E5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Film-Information__Logo__Logo-Film {
        width: 112px;
        height: 168px;
    }

    .Film-Information__Logo__Logo-Film__Poster {
        width: 100%;
        height: 100%;
    }

    .Film-Information__Text-Information {
        margin: 32px 0px 34px 24px; 
        width: 80%;
    }

    .Film-Information__Text-Information__Name-Film {
        text-decoration: none;
        font-family: sans-serif;
        font-style: normal;
        font-size: 27px;
        margin: 0px 0px 5px 0px; 
        color: #FFFFFF;
    }

    .Film-Information__Text-Information__Year-Genres {
        font-family: sans-serif;
        font-style: normal;
        margin: 5px 0px 3px 0px; 
        color: #988F8F;
        display: flex;
    }

    .Film-Information__Text-Information__Director {
        font-family: sans-serif;
        font-style: normal;
        margin: 5px 0px 3px 0px; 
        color: #988F8F;
        display: flex;
    }

    .Text-Information__Director__Name{
        margin-left: 7px;
    }

    .Film-Information__Text-Information__Acters {
        font-family: sans-serif;
        font-style: normal;
        display: flex;
        margin-top: 5px;
    }

    .Film-Information__Text-Information__Acters__Name {
        font-family: sans-serif;
        font-style: normal;
        margin: 0px 10px 3px 0px; 
        color: #988F8F;
    }

    .Film-Information__Text-Information__Acters__Bottom{
        max-width: 900px;
    }

    .Film-Information__Text-Information__Acters__Item{
        font-family: sans-serif;
        font-style: normal;
        margin: 0px 10px 3px 0px; 
        color: #FFFFFF;
        float: left;
        white-space: nowrap;
    }

    .Film-Information__Text-Information__About{
        margin: 5px 0px 3px 0px; 
        color: #FFFFFF;
        width: 80%;
    }

</style>