<template>
    <div>
        <carousel></carousel>
        <div class="content">
            <a-row class="margin-top-6">
                <a-col :span="24" class="rl">
                    <span class="titleNum">01</span>
                    <div class="vertical">
                        <div class="vertical__line"></div>
                        <span class="vertical__text">VR</span>
                    </div>
                    <p class="title--margin">VR全屋装</p>
                    <p class="title">所见即所得</p>
                </a-col>
            </a-row>
            <div class="line"></div>
            <p class="title-text normal-text">
                区别于传统装修公司，我们提供整套的VR全景方案100%还原未来新家
            </p>
        </div>
        <div class="more-info">
            <img class="more-info__img" src="../../assets/vr@3cut.png" type="image/svg+xml">

            <div class="button">
                <router-link to="/MoreInformation"><span class="button__text">了解更多</span></router-link>
                <div class="button__icon">
                    <img src="../../assets/箭头2.svg" type="image/svg+xml">
                </div>

            </div>
            <div class="download">
                <div class="download__circle-one"></div>
                <div class="download__circle-two"></div>
                <div class="download__circle-three"></div>
                <div class="download__button">
                    <img src="../../assets/箭头1.svg" type="image/svg+xml">
                </div>
            </div>
        </div>

        <div class="reserve">
            <div class="reserve__icon">
                <img src="../../assets/mei'jia.png">
            </div>
            <p class=" reserve__title">现在预约</p>
            <div class="reserve__line"></div>
            <p class="normal-text reserve__title-text">免费获得VR全景方案</p>
        </div>


        <a-form :form="form" @submit="handleSubmit" class="reserve ">


            <a-form-item  style="width: 620px" class="select">
                <a-select style="height: 60px"
                          v-decorator="[
          'houseType',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
                        placeholder="默认显示的文字"
                        @change="handleSelectChange"
                >
                    <a-select-option :value="1">毛胚房</a-select-option>
                    <a-select-option :value="2">简装房</a-select-option>
                    <a-select-option :value="3">精装房</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item  style="width: 620px" class="select">
                <a-select style="height: 60px"
                          v-decorator="[
          'city',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
                          placeholder="默认显示的文字"
                          @change="handleSelectChange"
                >
                    <a-select-option v-for="item in cityList" v-bind:value="item.value">
                        {{item.city}}
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item  style="width: 620px" class="select">
                <a-input style="height: 60px"
                         v-decorator="['location', { rules: [{ required: true, message: '请填写所在小区！' }] }]"
                         placeholder="所在小区"
                />
            </a-form-item>
            <a-form-item class="reserve__button" >
                <a-button type="primary" html-type="submit">
                    立即预约
                </a-button>
            </a-form-item>
        </a-form>


    </div>
</template>

<script>
    import carousel from './carousel.vue';
    import axios from 'axios'

    const cityList = [
        {
            value: 1,
            city: "杭州市"
        },
        {
            value: 2,
            city: "宁波市"
        },
        {
            value: 3,
            city: "温州市"
        },
        {
            value: 4,
            city: "嘉兴市"
        },
        {
            value: 5,
            city: "湖州市"
        },
        {
            value: 6,
            city: "绍兴市"
        },
        {
            value: 7,
            city: "金华市"
        },
        {
            value: 8,
            city: "衢州市"
        },
        {
            value: 9,
            city: "舟山市"
        },
        {
            value: 10,
            city: "台州市"
        },
        {
            value: 11,
            city: "丽水市"
        },

    ];
    const info= null;



    export default {
        name: "home",
        data() {
            return {
                cityList,
                info
            }
        },
        components: {
            carousel
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        mounted(){
            this.setDefaultSelect();


        },
        methods: {
            handleChange(value) {
                let type = typeof (value);
                console.log(type);
            },
            handleSelectChange(value) {
                let type = typeof (value);
                console.log(type);
            },

            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
                // axios
                //     .post('/carrots-admin-ajax/a/login?name=admin&pwd=123456',)
                //     .then(response => (this.info = response ))
                //     .catch(function (error) { // 请求失败处理
                //         console.log(error);
                //     });
                // console.log(info);
                axios.post('/api/a/login?name=admin&pwd=123456')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            },

            setDefaultSelect(){
                console.log(this.form);
                let defaultCity = {city:1};
                let defaultHouseType = {houseType:1};
                this.form.setFieldsValue(defaultCity);
                this.form.setFieldsValue(defaultHouseType)
            }

        },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import 'home.scss';

</style>