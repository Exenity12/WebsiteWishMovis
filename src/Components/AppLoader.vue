<template>
    <div class="LoaderBlock">
        <div class="LoaderItem">
            <div class="LoaderItemBlack"></div>
            <div class="BlockWhiteOne"></div>
            <div class="LoaderItemRed"></div>
            <div class="BlockWhiteTwo"></div>
            <div class="BlockWhiteThree"></div>
            <div class="BlockWhiteFour"></div>
        </div>
    </div>
</template>
<style lang="scss">

    .LoaderBlock { 
        width: 100%;
        height: 660px;
        background-color: #363232;
    }

    .LoaderItem {
        margin: 200px 0px 0px 37%;
        position: relative;
    }

    .LoaderItemBlack {
        position: absolute;
        width: 93.78px;
        height: 92.24px;
        border: 4px solid #000000;
        border-radius: 50px;
        transform: matrix(0.8, 0.6, 0.6, -0.8, 0, 0);
    }

    .LoaderItemRed {
        top: 20px;
        left: 5px;
        position: absolute;
        width: 75.78px;
        height: 75.24px;
        border: 3px solid red;
        border-radius: 50px;
    }

    .BlockWhiteOne {
        position: absolute;
        background-color: #363232;
        width: 130px;
        height: 80px;
        top: 40px;
        left: -35px;
        transform: matrix(0.8, 0.6, 0.6, -0.8, 0, 0);
    }

    .BlockWhiteTwo {
        position: absolute;
        background-color: #363232;
        width: 80px;
        height: 30px;
        top: 30px;
        left: 15px;
        transform: matrix(0.8, 0.6, 0.6, -0.8, 0, 0);
    }

    .BlockWhiteThree {
        position: absolute;
        background-color: #363232;
        width: 50px;
        height: 15px;
        top: 25px;
        left: 40px;
        transform: matrix(0.8, 0.6, 0.6, -0.8, 0, 0);
    }

    .BlockWhiteFour{
        position: absolute;
        background-color: #363232;
        width: 50px;
        height: 15px;
        top: 55px;
        left: 40px;
        transform: matrix(0.8, 0.6, 0.6, -0.8, 0, 0);
    }

</style>