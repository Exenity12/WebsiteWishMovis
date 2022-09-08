<template>
    <div class="Film-Information__Logo">
        <div class="Film-Information__Logo__Logo-Film">
        <!-- <img
            v-bind:src=this.item.poster
            alt="alt"
            class="Film-Information__Logo__Logo-Film__Poster"/> -->
        </div>
    </div>
</template>
<style lang="scss">

    $lenghtSide: 168px;
    
    .Film-Information__Logo {
        min-width: $lenghtSide;
        flex-basis: $lenghtSide;
        min-height: $lenghtSide;
        background-color: #E5E5E5;
        justify-content: center;
        align-items: center;
    }

    .Film-Information__Logo__Logo-Film {
        flex-basis: 112px;
        height: $lenghtSide;
    }

    .Film-Information__Logo__Logo-Film__Poster {
        width: 100%;
        height: 100%;
    }

</style>
