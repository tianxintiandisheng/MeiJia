<template>
    <a-carousel autoplay>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
        <div><img src="https://btsstatic.oss-cn-shanghai.aliyuncs.com/official/about1.jpg"></img></div>
    </a-carousel>
</template>
<script>
    export default {};
</script>
<style scoped>
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
