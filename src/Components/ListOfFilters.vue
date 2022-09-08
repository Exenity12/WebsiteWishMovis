<template>
    <ul class="List-of-filters">
        <div class="List-of-filters__Item">
            <input 
                class="List-of-filters__Item__Checkbox" 
                type="checkbox"  
                v-model=this.checkedName
                v-on:change="this.checkName"/>
            <div class="List-of-filters__Item__Name">Отсортировать по названию</div>
        </div>
        <div class="List-of-filters__Item">
            <input 
                class="List-of-filters__Item__Checkbox" 
                type="checkbox"  
                v-model="this.checkedYear"
                v-on:change="this.checkYear"/>
            <div class="List-of-filters__Item__Name">Отсортировать по году</div>
        </div>
    </ul>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        computed: mapGetters(["getAllFilm"]),
        data(){
            return {
                checkedName: false,
                checkedYear: false,
                newArrayFilm: [],
            }
        },
        methods: {
            ...mapActions(["SortArrayFilms", "updataMainListFilms", "fetchFilm"]),
            checkName() {
                if((this.checkedName === true && true === this.checkedYear)) this.checkedYear = !this.checkedYear;
                if((this.checkedName === false && false === this.checkedYear)) {
                    this.fetchFilm();
                }
                if(this.checkedName === true) {
                    this.newArrayFilm = this.getAllFilm.sort((a, b) => a.title.localeCompare(b.title))
                    this.SortArrayFilms(this.newArrayFilm);
                }
            },
            checkYear() {
                if((this.checkedName === true && true === this.checkedYear)) this.checkedName = !this.checkedName;
                if((this.checkedName === false && false === this.checkedYear)) {
                    this.fetchFilm();
                }
                if(true === this.checkedYear) {
                    this.newArrayFilm = this.getAllFilm.sort((a, b) => parseFloat(a.year) - parseFloat(b.year));
                    this.SortArrayFilms(this.newArrayFilm);
                }
            }
        },
    }
</script>
<style lang="scss">

    .List-of-filters{
        display: flex;
        background-color: #363232;
        height: 20px;
        border-bottom: 1px solid #FFFFFF;
        margin-bottom: 40px;
        padding: 0px 0px 20px 0px;
    }
    .List-of-filters__Item {
        display: flex;
        margin-right: 10px;
        margin-right: 35px;
    }
    .List-of-filters__Item__Name {
        margin-top: 2px;
        color: #FFFFFF;
        font-family: 'Roboto';
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    .List-of-filters__Item__Checkbox{
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
</style>