<template>
    <div class="GenresYearActors">
        <div class="Text-Information__Year-Genres">
            {{this.item.year}}
            <div v-for="genres in this.item.genres" :key="genres">, {{genres}}</div>
        </div>
        <div class="Text-Information__Director">
            режиссер:
            <div
                class="Text-Information__Director__Name" 
                v-for="directors in this.item.directors" :key="directors">
                {{directors}}
            </div>
        </div>
        <div class="Text-Information__Acters">
            <div class="Text-Information__Acters__Name">актёры:</div>
            <div class="Text-Information__Acters__Bottom">
                <div
                    class="Text-Information__Acters__Item" 
                    v-for="actors in this.item.actors" :key="actors">
                    {{actors}}
                </div>
            </div>
        </div>
        <div class="Text-Information__About">{{this.item.description}}</div>
    </div>
</template>
<script>
    
    export default {
        props: [ "item" ],
    }

</script>
<style lang="scss">

    $colorFont: #988F8F;
    $colorWhite: #FFFFFF;

    %textStyle{
        font-family: 'Roboto';
        font-style: normal;
    }

    %mainName {
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
    }


    .Text-Information__Year-Genres {
        @extend %textStyle;
        @extend %mainName;
        margin: 5px 0px 3px 0px; 
        color: $colorFont;
        display: flex;
        text-transform: uppercase;
    }

    .Text-Information__Director {
        @extend %textStyle;
        @extend %mainName;
        margin: 5px 0px 3px 0px; 
        color: $colorFont;
        display: flex;
        text-transform: uppercase;
    }

    .Text-Information__Director__Name{
        margin-left: 7px;
    }

    .Text-Information__Acters {
        @extend %textStyle;
        @extend %mainName;
        display: flex;
        margin-top: 5px;
    }

    .Text-Information__Acters__Name {
        @extend %textStyle;
        @extend %mainName;
        text-transform: uppercase;
        margin: 0px 8px 3px 0px; 
        color: $colorFont;
        padding-top: 1.6px;
    }

    .Text-Information__Acters__Bottom{
        max-width: 900px;
    }

    .Text-Information__Acters__Item{
        @extend %textStyle;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        margin: 0px 10px 3px 0px; 
        color: $colorWhite;
        float: left;
        white-space: nowrap;
    }

    .Text-Information__About{
        @extend %textStyle;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin: 5px 0px 3px 0px; 
        color: $colorWhite;
    }

</style>
