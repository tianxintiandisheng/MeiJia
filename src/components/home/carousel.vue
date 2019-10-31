<!--<template>-->
    <!--<a-carousel arrows>-->
        <!--<div-->
                <!--slot="prevArrow"-->
                <!--slot-scope="props"-->
                <!--class="custom-slick-arrow"-->
                <!--style="left: 10px;zIndex: 1"-->
        <!--&gt;-->
            <!--<a-icon type="left-circle" />-->
        <!--</div>-->
        <!--<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">-->
            <!--<a-icon type="right-circle" />-->
        <!--</div>-->
        <!--<div><img src="../../assets/banner1@3.png"></div>-->
        <!--<div><img src="../../assets/banner2@3.png"></div>-->
        <!--<div><img src="../../assets/banner1@3.png"></div>-->
        <!--<div><img src="../../assets/banner2@3.png"></div>-->
    <!--</a-carousel>-->
<!--</template>-->
<!--<script>-->
    <!--export default {};-->
<!--</script>-->
<!--<style scoped>-->
    <!--/*样式覆盖*/-->
    <!--img{-->
        <!--width: 100%;-->
    <!--}-->
    <!--/* For demo */-->
    <!--.ant-carousel >>> .slick-slide {-->
        <!--text-align: center;-->
        <!--height: 160px;-->
        <!--line-height: 160px;-->
        <!--background: #364d79;-->
        <!--overflow: hidden;-->
    <!--}-->

    <!--.ant-carousel >>> .custom-slick-arrow {-->
        <!--width: 25px;-->
        <!--height: 25px;-->
        <!--font-size: 25px;-->
        <!--color: #fff;-->
        <!--background-color: rgba(31, 45, 61, 0.11);-->
        <!--opacity: 0.3;-->
    <!--}-->
    <!--.ant-carousel >>> .custom-slick-arrow:before {-->
        <!--display: none;-->
    <!--}-->
    <!--.ant-carousel >>> .custom-slick-arrow:hover {-->
        <!--opacity: 0.5;-->
    <!--}-->

    <!--.ant-carousel >>> .slick-slide h3 {-->
        <!--color: #fff;-->
    <!--}-->
<!--</style>-->

<template>
    <a-carousel :afterChange="onChange">
        <div><img src="../../assets/banner1@3.png"></div>
        <div><img src="../../assets/banner2@3.png"></div>
        <div><img src="../../assets/banner1@3.png"></div>
        <div><img src="../../assets/banner2@3.png"></div>
    </a-carousel>
</template>
<script>
    export default {
        methods: {
            onChange(a, b, c) {
                console.log(a, b, c);
            },
        },
    };
</script>
<style scoped>
    img{
        width: 100%;
    }
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>