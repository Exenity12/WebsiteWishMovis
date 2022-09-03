<template>
    <div class="Back-to-list">
        <router-link class='Back-to-list__Button' to="/">{{"<"}} Назад к списку</router-link>
    </div>
</template>
<style>

    .Back-to-list{
        display: flex;
        background-color: #363232;
        height: 20px;
        border-bottom: 1px solid white;
        margin-bottom: 40px;
        padding: 0px 0px 20px 0px;
    }

    .Back-to-list__Button{
        margin: 10px 0px 0px 10px;
        color: #FF5252;
        font-family: sans-serif;
        font-style: normal;
    }

</style>