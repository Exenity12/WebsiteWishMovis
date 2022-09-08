<template>
    <div class="Back-to-list">
        <router-link class='Back-to-list__Button' to="/">{{"<"}} Назад к списку</router-link>
    </div>
</template>
<style lang="scss">

    .Back-to-list{
        display: flex;
        background-color: #363232;
        height: 20px;
        border-bottom: 1px solid white;
        margin-bottom: 42px;
        padding: 34px 0px 30px 0px;
    }

    .Back-to-list__Button{
        margin: 10px 0px 0px 10px;
        color: #FF5252;
        font-family: 'Roboto';
        font-style: normal;
    }

</style>