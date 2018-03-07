<template>
    <div>
        <HomeBanner></HomeBanner>
        <div class="plan-list-wrap ">
            <p class="plan-list-title">自
                <span>／</span>选
                <span>／</span>路
                <span>／</span>径</p>

            <div class="plan-list-box clearfix">
                <a class="plan-item l" @click="clickP(item)" v-for="item  in  article_list" :key="item._id">
                    <div class="img-box">
                        <div class="img-up" style="background-image: url(//img1.sycdn.imooc.com/climg/59030cc50001144806000338.jpg);">

                        </div>
                        <div class="img-mid" style="background-image: url(//img1.sycdn.imooc.com/climg/59030cc50001144806000338.jpg);"></div>
                        <div class="img-down" style="background-image: url(//img1.sycdn.imooc.com/climg/59030cc50001144806000338.jpg);"></div>
                    </div>

                    <div class="plan-item-desc-box">
                        <p class="plan-item-name">{{item.title}}</p>
                        <!-- <div class="plan-item-desc clearfix">
                                    <p class="plan-step-num l">5步骤／33门课</p>
                                </div> -->
                        <p class="plan-item-desc-content">{{item.summary}}</p>
                        <div class="price-box clearfix">
                            <p class="normal-price l">{{item.price==0?'免费':'￥'+item.price}}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import HomeBanner from './HomeBanner.vue'
export default {
    name: 'article-list',
    data() {
        return {
            article_list: [],

            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 12,
                page_sizes: [3, 9, 12, 24],
                layout: "total, sizes, prev, pager, next, jumper"
            },

            search_data: {
                title: ''
            }
        }
    },
    methods: {
        clickP(item) {
            if (item.coursepath[0]) {
                this.$popup(item, function() {
                    flowplayer.conf = {
                        splash: true
                    };
                    $(".player").flowplayer();
                })
            } else {
                this.$router.push({ name: 'detail', params: { pid: item._id } })
            }
        },
		/**
		 * 格式化性别
		 */
        formatterSex(item) {
            return item.sex == 1 ? '男' : '女';
        },

		/**
		 * 格式化状态
		 */
        formatterStatus(item) {
            return item.status == 1 ? '启用' : '禁用';
        },

        // 格式化date  包含小时
        formatterDate(item) {
            return moment(item).format('YYYY-MM-DD HH:MM:SS');
        },

        filterSex(value, item) {
            return item.sex == value;
        },
        filterStatus(value, item) {
            return item.status == value;
        },


		/**
		 * 搜索事件
		 */
        onSearch() {
            // console.log(this.search_data);
            var query = this.$route.query;
            var sd = {};

            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }

            var where = {};

            for (var s in this.search_data) {
                if (this.search_data[s]) {
                    where[s] = this.search_data[s];
                } else {
                    if (sd[s]) {
                        delete sd[s];
                    }
                }
            }


            this.getList({
                where,
                fn: () => {
                    this.setPath(Object.assign(sd, where));
                }
            });
        },




		/**
		 * 获取文章列表
		 * @param  {number} options.page      当前页码，切换页码时用
		 * @param  {number} options.page_size 每页显示数量，改变每页数量时用
		 * @param  {function} options.fn                            } 获取列表后的回调函数
		 */
        getList({
			page,
            page_size,
            where,
            fn
		} = {}) {
            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;

            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };

            if (where) {
                data = Object.assign(data, where || {});
            } else {
                for (var s in query) {
                    if (this.search_data[s] !== undefined) {
                        this.search_data[s] = query[s];
                        data[s] = query[s];
                    }
                }
            }

            this.$$api_course_selectPCourse(data, (article_data) => {
                this.article_list = article_data.list.data;
                this.paginations.total = article_data.list.total;
                fn && fn();
            });
        },
    },
    mounted() {
        this.getList({
            fn: () => { }
        });
    },
    components: {
        HomeBanner
    }
}
</script>
<style scoped lang='less'>
.plan-list-wrap {
    padding-top: 97px;
    padding-bottom: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.06);

    .plan-list-title {
        margin-bottom: 12px;
        margin-bottom: 24px;
        font-size: 20px;
        color: #07111B;
        letter-spacing: 3px;
        line-height: 36px;
        font-weight: 700;
        text-align: center;
        span {
            font-size: 14px;
            color: #bfc3c7;
            letter-spacing: 3px;
            font-weight: 200;
        }
    }

    .plan-list-box {
        margin: 0 auto;
        width: 1152px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        flex-wrap: wrap;
        .plan-item {
            margin-bottom: 24px;
            position: relative;
            display: block;
            margin-right: 24px;
            width: 270px;
            height: 332px;
            cursor: pointer;
            &:link,
            &:visited {
                color: #5e5e5e;
            }



            .img-box {
                margin-bottom: 8px;
                width: 270px;
                height: 168px;

                .img-up,
                .img-mid,
                .img-down {
                    margin: 0 auto;
                    position: absolute;
                    border-radius: 8px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 0.3s;
                    -moz-transition: all 0.3s;
                    -webkit-transition: all 0.3s;
                    -o-transition: all 0.3s;
                    background-image: url(../../../../../assets/59030cc50001144806000338.jpg);
                }
                .img-up {
                    top: 12px;
                    left: 0px;
                    width: 270px;
                    height: 148px;
                    z-index: 3;
                }

                .img-mid {
                    top: 16px;
                    left: 4px;
                    width: 262px;
                    height: 148px;
                    opacity: 0.4;
                    z-index: 2;
                }
                .img-down {
                    top: 20px;
                    left: 8px;
                    width: 254px;
                    height: 148px;
                    opacity: 0.2;
                    z-index: 1;
                }
            }

            .plan-item-desc-box {
                padding: 0px 11px;
                width: 100%;
                box-sizing: border-box;
                .plan-item-name {
                    font-size: 16px;
                    color: #07111B;
                    line-height: 24px;
                }

                .plan-item-desc {
                    margin: 4px 0px;
                    font-size: 12px;
                    color: #4D555D;
                    line-height: 24px;
                    font-weight: 200;
                    .learn-num {
                        margin: 0px 12px;
                        i {
                            font-style: normal;
                            margin-right: 2px;
                        }
                    }

                    .plan-item-star {
                        font-size: 12px;
                        color: rgba(255, 153, 0, 0.4);
                        line-height: 24px;
                        .on {
                            color: #FF9900;
                        }
                    }
                }

                .plan-item-desc-content {
                    max-height: 48px;
                    font-size: 12px;
                    color: #93999F;
                    letter-spacing: -0.1px;
                    line-height: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .price-box {
                    margin-top: 12px;
                    width: 100%;

                    .normal-price {
                        margin-right: 4px;
                        font-size: 12px;
                        color: #4D555D;
                        line-height: 20px;
                    }
                }
            }

            &:hover .plan-item-name {
                color: #F01414;
            }

            &:hover .img-up {
                top: 0px;
                left: 0px;
                width: 270px;
            }

            &:hover .img-mid {
                top: 10px;
                left: 8px;
                width: 254px;
            }

            &:hover .img-down {
                top: 20px;
                left: 16px;
                width: 238px;
            }
            &:nth-child(4n) {
                margin-right: 0px;
            }
        }
    }
}
</style>
