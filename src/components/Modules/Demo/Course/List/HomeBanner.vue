<template>
    <div class="program-banner">
        <div class="relative banner-head js-banner-head">
            <div class="js-other nav-item active">
                <h2 class="tit">成长 因陪伴不再孤独</h2>
                <div class="top-desc-box clearfix">
                    <p class="desc-item big-desc-item">课程体系化</p>
                    <em class="desc-line">/</em>
                    <p class="desc-item">问答作业1V1</p>
                    <em class="desc-line">/</em>
                    <p class="desc-item">学练测一体</p>
                    <em class="desc-line">/</em>
                    <p class="desc-item">视频不限期</p>
                    <em class="desc-line">/</em>
                    <p class="desc-item big-desc-item">服务随开随用</p>
                </div>
            </div>
        </div>

        <div class="tab-nav js-tabNav clearfix">
            <a href="javascript:;" data-type="all" v-for="classs  in courseClass" :key="classs._id" class="navitem navitemall ">
                <i class="navicon all"></i>
                <span class="navtext">{{classs.className}}</span>
                <div class="navbot"></div>
            </a>
        </div>

        <div class="MMM"></div>
        <div class="program-banner-wrap">
            <div class="program-banner-absolute">
                <div class="program-banner-bk">
                    <div class="svg-block image1"></div>
                    <div class="svg-diamond image2"></div>
                    <div class="svg-leaf image3"></div>
                    <div class="svg-small-circle"></div>
                    <div class="svg-big-circle"></div>
                    <div class="svg-triangle image4"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeBanner',
    data() {
        return {
            courseClass: []
        }
    },
    methods: {
        getClass(fn) {
            this.$$api_class_selectClass({}, (class_data) => {
                this.courseClass = class_data.list.data;
                fn && fn();
            });
        }
    },
    mounted() {
        this.getClass()
    }
}
</script>
<style scoped lang='less'>
.program-banner {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    position: relative;
    .banner-head {
        z-index: 10;
        &>div.active {
            display: block;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
        }
        .tit {
            font-size: 36px;
            color: #fff;
            line-height: 36px;
            text-align: center;
            text-shadow: 0px 4px 8px rgba(7, 17, 27, 0.4);
            letter-spacing: 4px;
            margin-bottom: 26px;
            font-weight: bold;
        }
        .top-desc-box {
            margin: 0 auto;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: 1px;
            line-height: 20px;
            text-align: center;
            .desc-item {
                font-weight: normal;
                display: inline-block;
            }
            em {
                margin: 0 24px;
                position: relative;
                top: 0px;
                font-size: 24px;
                color: #FFFFFF;
                letter-spacing: 1.71px;
                text-shadow: 0 4px 8px rgba(7, 17, 27, 0.4);
                line-height: 40px;
                font-weight: 200;
                display: inline-block;
            }

            em {
                font-style: normal;
            }
        }
    }
    .relative {
        position: relative;
    }

    .tab-nav {
        position: absolute;
        width: 1152px;
        height: 120px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0px 8px 16px rgba(7, 17, 27, 0.1);
        left: 50%;
        bottom: -60px;
        margin-left: -576px;
        padding: 20px 36px 0;
        z-index: 10;
        box-sizing: border-box;

        .navitem {
            float: left;
            width: 108px;
            height: 100px;
            text-align: center;
            cursor: pointer;
            position: relative;
            margin: 0 36px;
            .navicon {
                display: block;
                width: 48px;
                height: 48px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 2px;
                transition: .1s all linear;
                margin-top: 0;
                background-size: cover;
            }
            .navtext {
                font-size: 14px;
                color: #93999f;
                line-height: 14px;
                transition: .3s all linear;
            }
            .navbot {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: none;
                height: 2px;
                background-color: #f01414;
                line-height: 0;
                overflow: hidden;
            }
            .all {
                background-image: url(../assets/all_icon.png);
                background-position: 0 0;
            }
            .fe {
                background-image: url(../assets/web_icon.png);
            }
            .java {
                background-image: url(../assets/java_icon.png);
            }
            .android {
                background-image: url(../assets/android_icon.png);
            }
            .php {
                background-image: url(../assets/php_icon.png);
            }
            .ios {
                background-image: url(../assets/ios_icon.png);
            }

            &:link,
            &:visited {
                color: #5e5e5e;
            }

            &:link,
            &:visited,
            ins {
                text-decoration: none;
            }
            &:hover .navicon {
                margin-top: -4px;
            }
            &:hover .navbot {
                display: block;
            }
        }
    }
    .MMM {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 9;
    }
    .program-banner-wrap {
        width: 100%;
        height: 300px;
        position: relative;
        background-color: #1b324a;
        overflow: hidden;
        .program-banner-absolute {
            position: absolute;
            width: 3174px;
            height: 2624px;
            left: 50%;
            margin-left: -1587px;
            top: 50%;
            margin-top: -940px;
            .program-banner-bk {
                width: 3174px;
                height: 2624px;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                background-position: center 24%;
                background-size: cover;
                div {
                    background-size: contain;
                    background-repeat: no-repeat;
                    opacity: 0.6;
                    filter: alpha(opacity=60);
                }
            }
        }
    }
}
</style>
