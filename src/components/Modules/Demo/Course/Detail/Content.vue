<template>
    <div class="course-info-main clearfix w">
        <div class="content-wrap">
            <div class="content">
                <!-- 课程公告 -->
                <!-- 课程简介 -->
                <div class="course-brief">
                    <p class="auto-wrap">简介：该课程首先会告诉大家什么是Hybrid，Hybrid有什么特点，也会告诉大家业内有哪些常见的Hybrid应用以及Hybrid合理的应用场景。 然后，课程会简单介绍在做一个Hybrid架构的方方面面，包括Hybrid的发展，比如超级Hybrid方案React Native以及Weex 学习该课程，大家会知道Hybrid中H5与Native如何交互，并且对Hybrid体验增强和Hybrid离线包有一些认识，是大家做混合APP的必备良药。
                    </p>
                </div>
                <!-- 课程简介 end -->
                <div class="mod-tab-menu green-box">
                    <ul class="course-menu clearfix">
                        <li>
                            <a class="ui-tabs-active active" id="learnOn" href="/learn/850">
                                <span>章节</span>
                            </a>
                        </li>
                        <li>
                            <a id="commentOn" class="" href="/comment/850">
                                <span>评论</span>
                            </a>
                        </li>
                    </ul>

                </div>
                <!-- 课程面板 -->
                <!-- 课程章节 -->
                <div class="mod-chapters">
                    <div class="chapter chapter-active">
                        <!-- 章节标题 -->
                        <h3>
                            <span class="icon-drop_down js-close .js-open js-open"></span>
                            <strong>
                                <i class="icon-chapter"></i>
                                第1章 畅谈Hybrid
                                <div class="icon-info chapter-info">
                                    <i class="icon-drop_up triangle" style="display: none;">
                                        <div class="chapter-introubox" style="left: -132px;">
                                            <div class="chapter-content" style="width: 280px; white-space: pre-line; text-align: center;">介绍Hybrid开发的种种，带你进入Hybrid的世界</div>
                                        </div>
                                    </i>
                                </div>
                            </strong>

                        </h3>
                        <!-- 章节标题 end -->
                        <!-- 章节小节 -->
                        <ul class="video">
                            <li v-for="item  in  courseList" :key="item._id" @click="clickP(item)">
                                <!-- <em v-if="item == 1" class="laststudy">最近学习</em> -->
                                <a href="javascript:;" class="J-media-item">
                                    <i class="ing"></i>
                                    <i class="icon-video type"></i>
                                    {{item.title}}
                                </a>
                                <!-- 未登录时 -->
                                <!-- <a target="_blank" href="/video/1430" class="J-media-item studyvideo">1-1 Java简介 (05:49)                                                                                                                                                                                          </a> -->
                            </li>
                        </ul>
                        <!-- 章节小节 end -->
                    </div>
                </div>
                <!-- 课程章节 end -->
            </div>
            <!--content end-->
            <div class="aside r">
                <div class="bd">

                    <!-- <div class="box mb40 js-usercard-box">
                                                        <h4>讲师提示</h4>
                                                        <div class="teacher-info">
                                                            <a href="/u/5436416/courses?sort=publish" target="_blank">
                                                                <img data-userid="5436416" class="js-usercard-dialog" src="//img.mukewang.com/593e573300018b3801800180-80-80.jpg" width="80" height="80">
                                                            </a>
                                                            <span class="tit">
                                                                <a href="/u/5436416/courses?sort=publish" target="_blank">叶小钗Hybrid...</a>
                                                                <i class="icon-imooc"></i>
                                                            </span>
                                                            <span class="job"></span>
                                                        </div>
                                                        <div class="course-info-tip">
                                                            <dl class="first">
                                                                <dt>课程须知</dt>
                                                                <dd class="autowrap">1、熟悉html、css、js 2、对Hybrid有一定的了解
                                                                </dd>
                                                            </dl>
                                                            <dl>
                                                                <dt>老师告诉你能学到什么？</dt>
                                                                <dd class="autowrap">1、什么是Hybrid 2、H5如何与Native通信 3、Hybrid核心交互 4、Hybrid中的账号体系 5、Native能力在Hybrid中的应用 6、离线更新 7、如何落地一个Hybrid项目
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div> -->

                    <div class="js-recom-box">
                        <div class="box mb40 recom-course-list-box">
                            <h4>推荐课程</h4>
                            <ul class="js-recom-course recom-course-list clearfix">
                                <li v-for="item  in  [1,2,3,4,5]" :key="item" class="clearfix">
                                    <router-link to="detail" class="clearfix">
                                        <div class="l course-img" style="background-image: url(http://www.imooc.com/courseimg/s/cover042_s.jpg);">
                                            <div class="cart-color purple"></div>
                                        </div>
                                        <div class="l content-box">
                                            <p class="smalle-title">JavaScript入门篇</p>
                                            <p class="content-text" title="本教程让您快速认识JavaScript，熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作，学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式，本JavaScript教程分为四个章节，能够让您快速入门，为JavaScript深入学习打下基础。">本教程让您快速认识JavaScript，熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作，学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式，本JavaScript教程分为四个章节，能够让您快速入门，为JavaScript深入学习打下基础。</p>
                                            <div class="clearfix learn-detail">初级
                                                <span>·</span>526483人在学</div>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="clear"></div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            courseList: []
        }
    },
    methods: {
        clickP(item) {
            this.$popup(item, function() {
                flowplayer.conf = {
                    splash: true
                };
                $(".player").flowplayer();
            })
        },
        /**
		 * 获取文章列表
		 * @param  {function} options.fn                            } 获取列表后的回调函数
		 */
        getList({
            fn
		} = {}) {
            var query = this.$route.params;
            var data = {};
            for (var s in query) {
                data[s] = query[s];
            }
            this.$$api_course_selectCCourse(data, (article_data) => {
                console.log(article_data)
                this.courseList = article_data.list.data;
                fn && fn();
            });
        },
    },
    mounted() {
        this.getList({
            fn: () => { }
        });
    },
}
</script>
<style lang="less" scoped>
.course-info-main {
    margin-top: 36px;
    margin-bottom: 40px;
    .content-wrap {
        padding-right: 376px;
        margin-bottom: 29px;
        overflow: visible;
        margin-bottom: 0;
    }

    .content {
        float: left;
        width: 100%;

        .course-brief {
            font-size: 14px;
            color: #4d555d;
            line-height: 28px;
            word-break: break-all;
        }
    }

    .course-brief {
        font-size: 14px;
        color: #4d555d;
        line-height: 28px;
        word-break: break-all;
        padding-left: 24px;
        padding-right: 24px;
    }

    .course-menu {
        border-bottom: 1px solid #D1D6DA;
        li {
            float: left;
            text-align: center;
            margin-right: 12px;
        }
        a {
            display: block;
            padding: 26px 24px;
            font-size: 16px;
            color: #4d555d;
        }

        a.active,
        a:hover {
            color: #00b43c;
        }
    }

    .chapter {
        border-bottom: 1px solid #d9dde1;
        padding: 0 24px 12px;

        h3 {
            position: relative;
            height: 53px;
            line-height: 65px;
            font-size: 16px;
            color: #07111b;
            font-weight: 700;
            cursor: pointer;
            span {
                position: relative;
                right: -6px;
                float: right;
                font-size: 24px;
                height: 65px;
                line-height: 65px;
                color: #93999f;
            }

            strong {
                font-weight: 700;
            }

            i {
                margin-right: 5px;
                color: #93999f;
                font-size: 24px;
                position: relative;
                top: 4px;
            }
            .chapter-info {
                position: relative;
                top: 2px;
                line-height: 16px;
                font-size: 16px;
                color: #d9dde1;
                max-width: 300px;
                display: inline-block;

                .triangle {
                    display: none;
                    position: absolute;
                    top: 2px;
                    left: -14px;
                    color: #4d555d;
                    font-size: 46px;
                    z-index: 2;
                }

                .chapter-introubox {
                    position: absolute;
                    background: #4d555d;
                    color: #fff;
                    top: 24px;
                    z-index: 1;
                    font-size: 12px;
                    line-height: 20px;
                    padding: 8px 16px;
                    box-shadow: 0 4px 8px rgba(7, 17, 27, .1);

                    .chapter-content {
                        max-width: 360px;
                        white-space: pre;
                        word-wrap: break-word;
                    }
                }
            }
        }

        strong {
            display: block;
            white-space: nowrap;
            margin-right: 20px;
            text-overflow: ellipsis;
        }



        .video {
            padding: 0 0 4px 32px;
            li {
                position: relative;
                height: 40px;
                line-height: 40px;
                padding-left: 8px;
                background-color: #f3f5f7;
                margin-bottom: 8px;
                &:hover {
                    background: #2b333b;
                    color: #fff;
                }

                a {
                    color: #787d82;
                    display: block;
                    overflow: hidden;
                    word-break: break-all;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }

        &.chapter-active ul {
            display: block;
            margin-top: 10px;
        }
    }

    .aside {
        margin-right: -376px;
        width: 328px;

        h4 {
            font-weight: 700;
            font-size: 16px;
        }
        .teacher-info {
            padding: 24px 0 20px 80px;
            overflow: hidden;

            img {
                float: left;
                margin-left: -80px;
                width: 60px;
                height: 60px;
                border-radius: 100%;
            }

            .tit {
                display: block;
                margin-top: 5px;
                margin-bottom: 5px;

                a {
                    font-weight: 700;
                    color: #07111b;
                }
            }

            .job {
                font-size: 12px;
                color: #71777b;
            }
        }
    }
}

.mb40 {
    margin-bottom: 28px;
    padding: 0 24px 24px;
    border-bottom: 1px solid #d9dde1;
}

.course-info-tip {
    position: relative;
    padding: 24px;
    background-color: #edf1f2;
    color: #4d555d;
    margin-bottom: 12px;

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 50px;
        top: -10px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top: 0 none;
        border-bottom-color: #edf1f2;
    }

    dl.first {
        margin-bottom: 24px;
    }

    dt {
        margin-bottom: 6px;
        font-weight: 700;
        font-size: 12px;
    }

    dd {
        font-size: 12px;
        line-height: 24px;
        white-space: pre-line;
    }

    .autowrap {
        word-wrap: break-word;
        word-break: break-all;
    }
}

.recom-course-list-box {
    width: 328px;
    padding: 0 24px;
    box-sizing: border-box; // border-bottom: 1px solid #d9dde1;
    &.mb40 {
        border-bottom: none;
    }

    .recom-course-list li {
        width: 100%;
        padding: 24px 0;
        border-bottom: 1px solid #d9dde1;

        .course-img {
            margin-right: 16px;
            width: 72px;
            height: 60px;
            background-size: cover;
            border-radius: 2px;
            background-color: #f3f5f7;
            background-image: url(http://www.imooc.com/courseimg/s/cover048_s.jpg);
        }

        .cart-color {
            width: 72px;
            height: 60px;
            border-radius: 2px;
            padding: 5px 6px;
            box-sizing: border-box;
        }

        .content-box {
            width: 190px;
            .content-text,
            .smalle-title {
                margin-bottom: 8px;
                line-height: 20px;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
                max-height: 40px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
            }
            .smalle-title {
                font-size: 14px;
                color: #07111b;
            }

            .content-text {
                font-size: 12px;
                color: #93999f;
            }

            .learn-detail {
                font-size: 12px;
                line-height: 24px;
                color: #93999f;

                span {
                    padding: 0 3px;
                }
            }
        }

        &:last-child {
            border-bottom: none;
        }
    }
}
</style>

