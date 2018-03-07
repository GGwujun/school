<template>
    <div id="footer">
        <div class="waper">
            <div class="footerwaper clearfix">
                <div class="followus r">
                    <a class="followus-weixin" href="javascript:;" target="_blank" title="微信">
                        <div class="flw-weixin-box"></div>
                    </a>
                    <!-- <a class="followus-weibo" href="http://weibo.com/u/3306361973" target="_blank" title="新浪微博"></a> -->
                    <!-- <a class="followus-qzone" href="http://user.qzone.qq.com/1059809142/" target="_blank" title="QQ空间"></a> -->
                </div>
                <div class="footer_intro l">
                    <div class="footer_link">
                        <ul>
                            <li>
                                <a href="#" target="_blank">网站首页</a>
                            </li>
                            <li>
                                <a href="#" target="_blank" title="企业合作">企业合作</a>
                            </li>

                            <li>
                                <a href="#" target="_blank">联系我们</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">友情链接</a>
                            </li>
                        </ul>
                    </div>
                    <p>Copyright © 2017 imooc.com All Rights Reserved | 京ICP备 13046642号-2</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FooterJs from './FooterJs.js';
export default FooterJs;
</script>
<style scoped lang='less'>
#footer {
    margin-top: 0px;
    background: #000000;
    border-top: 1px solid #e2e4e6;
    font-size: 12px;
    color: #787d82;
    padding: 27px 0;
    min-width: 620px; // margin-top: 60px;
    .waper {
        width: auto;
        max-width: 1200px;
        margin: 0 auto;

        .followus {
            margin-right: 34px;
            padding-left: 30px;
            z-index: 3;
            a {
                float: left;
                position: relative;
                width: 32px;
                height: 32px;
                background-image: url(../../../assets/footer-sprite.png);
                background-repeat: no-repeat;
                margin: 3px 6px 0;
                opacity: 0.5;
                filter: alpha(opacity=50);
                -webkit-transition: opacity 0.2s;
                -moz-transition: opacity 0.2s;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 1;
                    filter: alpha(opacity=100);
                }
            }
            .followus-weixin {
                background-position: 0 -279px;

                .flw-weixin-box {
                    position: absolute;
                    display: none;
                    width: 170px;
                    height: 220px;
                    left: -69px;
                    bottom: 35px;
                    background: url(../../../assets/footer-sprite.png) no-repeat 0 0;
                    z-index: 3;
                }

                &:hover {
                    .flw-weixin-box {
                        display: block;
                    }
                }
            }

            .followus-weibo {
                background-position: 0 -321px;
            }

            .followus-qzone {
                background-position: 0 -363px;
            }
        }
    }

    .footer_intro {
        padding-left: 40px;

        .footer_link {
            margin-bottom: 4px;
            line-height: 1.8;

            ul {
                overflow: hidden;
                margin-top: -1px;
                li {
                    margin-right: 30px;
                    text-align: center;
                    float: left;
                    a:link,
                    a:visited,
                    a:active {
                        color: #c8cdd2;
                    }
                    a:hover {
                        color: #fff;
                    }
                }
            }
        }

        p {
            line-height: 1.7;
        }
    }
}
</style>