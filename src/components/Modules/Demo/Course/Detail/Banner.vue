<template>
    <div class="course-infos">
        <div class="w pr">
            <div class="hd clearfix l" style="margin-top: 1;padding-top: 62px;">
                <h2 class="l">Hybrid设计</h2>
            </div>

            <div class="statics clearfix l">
                <div class="static-item l">
                    <span class="meta">课程时长</span>
                    <span class="meta-value"> 1小时39分</span>
                    <em></em>
                </div>
                <!-- <div class="static-item l score-btn">
                    <span class="meta">综合评分</span>
                    <span class="meta-value">9.9</span>
                    <em></em>
                </div> -->
            </div>
            <div class="extra">
                <!-- credit -->
                <!-- share -->
                <div class="share-action r bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1510902105224">
                    <a href="javascript:;" class="share wx js-share icon-share-weichat" data-cmd="weixin" title="分享到微信"></a>
                    <a href="javascript:;" class="share qq js-share icon-share-qq" data-cmd="qzone" title="分享到QQ空间"></a>
                    <a href="javascript:;" class="share sina js-share icon-share-weibo" data-cmd="tsina" title="分享到新浪微博"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
.course-infos,
.pr {
    position: relative;
}



.course-infos {
    background-color: #172a34;

    .w {
        height: 170px;
        z-index: 1;
    }

    h2 {
        margin-bottom: 32px;
        line-height: 31px;
        font-weight: 700;
        font-size: 32px;
        color: #fff;
    }

    .statics {
        color: #fff;
        font-size: 0;
        white-space: nowrap;
        margin-top: 62px;

        .static-item {
            display: inline-block;
            position: relative;
            padding: 0 36px;
            height: 48px;
            font-size: 12px;
            top: 6px;

            .meta {
                display: block;
                opacity: .7;
                filter: alpha(opacity=70);
                line-height: 12px;
                font-size: 12px;
            }
            .meta-value {
                display: block;
                margin-top: 10px;
                opacity: .7;
                font-size: 16px;
                line-height: 16px;
                filter: alpha(opacity=70);
            }

            em {
                content: '';
                display: none;
                position: absolute;
                left: 0;
                top: 0;
                height: 36px;
                width: 1px;
                background-color: rgba(147, 153, 159, .4);
                zoom: 1;
            }

            &:nth-child(2) {
                padding-left: 0;
            }
        }

        .score-btn {
            cursor: pointer;
        }
    }

    .extra {
        position: absolute;
        right: 24px;
        top: 62px;
        color: #fff;

        .share {
            display: inline-block;
            float: none;
            padding: 0;
            font-size: 24px;
            background: rgba(7, 17, 27, .4);
            margin: 0 7px;
            width: 48px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, .4);
            color: rgba(255, 255, 255, .8);
        }
    }
}
</style>



