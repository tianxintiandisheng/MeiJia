<!-- app.vue -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import home from './components/home/home.vue'
    import MoreInformation from './components/more-information.vue'
    import Complete from './components/complete.vue'
    import Download from './components/download.vue'

    export default {
        name: 'app',
        components: {
            home,
            MoreInformation,
            Complete,
            Download
        }
    }
</script>

<style >
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        transform: rotate(0deg);
        border-radius: 25px;
        background: #8AC007;
    }


    ::placeholder {
        color: red;
    }
    .image {
        background-image: url(assets/584_201809039473584.png);
    }
    @media (min-resolution: 2dppx) {
        .image {
            background-image: url(assets/584_201809039473584.png);
        }
    }
</style>

