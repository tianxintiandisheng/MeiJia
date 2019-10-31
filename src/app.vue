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
    /*.body{*/
        /*background: #f5f5f5;*/
    /*}*/
    #app{

    }
</style>

