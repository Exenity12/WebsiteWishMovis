<template>
    <div class="Title-Information">
        <router-link 
            class="Text-Information__Name-Film" 
            v-bind:id=this.item.id 
            to="/ActiveFilm"
            v-on:click="changeActiveFilm($event)">
            {{this.item.title}}
        </router-link>
        <div class="Duration" v-if="this.item.collapse.duration">
            <div class="Duration-Info">
                <div
                    class="Duration-Text"
                    v-for="duration in this.item.collapse.duration" :key="duration">
                    {{duration}}
                </div>
                <div class="Mini-Logo"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
        props: [ "item" ],
        computed: mapGetters(["getAllFilm"]),
        methods: {
        ...mapActions(["updateActiveFilm"]),
        changeActiveFilm(e) {
            this.updateActiveFilm(this.getAllFilm.find(item => item.id == e.target.id))
        },
      },
    }

</script>
<style lang="scss">

    %textStyle{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
    }

    .Title-Information {
        display: flex;
        margin: 0px 0px 5px 0px; 
    }

    .Text-Information__Name-Film {
        text-decoration: none;
        @extend %textStyle;
        font-size: 36px;
        line-height: 36px;
        color: #FFFFFF;
    }

    .Duration {
        display: flex;
        margin-left: auto;
        margin-right: 0px;
    }

    .Duration-Info {
        display: flex;
        background-color: #C4C4C4;
        width: 177px;
        height: 30px;
        clip-path: polygon(5px 0, 100% 0, 100% 100%, 0 100%);
    }

    .Duration-Text {
        padding: 9px 10px 0px 18px;
        @extend %textStyle;
        font-size: 12px;
        line-height: 12px;
        text-transform: uppercase;
        color: #000000;
    }

    .Mini-Logo {
        width: 24px;
        height: 24px;
        background-color: red;
        margin-top: 3px;
    }

</style>
