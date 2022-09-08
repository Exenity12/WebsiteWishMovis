<template>
    <ul class="List-Films">
        <li class="Film-Information" v-for="item in getAllFilm" :key="item.id"> 
            <LogoFilm v-bind:item="item"/>
            <TextInformation class="Film-Information__Text-Information" v-bind:item="item"/>
        </li>
    </ul>
</template>
<script>

    import LogoFilm from './LogoFilm.vue'
    import TextInformation from './TextInformation.vue'
    import {  mapGetters } from 'vuex';

    export default {
      computed: mapGetters(["getAllFilm"]),
      components: { LogoFilm, TextInformation },
    };

</script>
<style lang="scss">
    
    .List-Films {
        padding-left: 0px;
        margin-top: 0px;
    }

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

    .Film-Information__Text-Information {
        margin: 32px 0px 34px 24px;
        margin-right: 0%;
        width: 99%;
    }

</style>