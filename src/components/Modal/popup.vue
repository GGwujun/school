<template>
    <div>
        <div class="tipoff-block js-tipoff-block" style="display: block;">
        </div>
        <div class="tipoff-box js-tipoff-box" style="display: block;">
            <div class="tipoff-top-box clearfix">
                <p class="l tipoff-title">{{ text }}</p>
                <span @click="$emit('popup', false)" class="r tipoff-close-btn icon-close2 js-tipoff-close"></span>
            </div>

            <div class="tipoff-content">
                <div class="player is-splash">
                    <video>
                        <source type="video/mp4" :src="url">
                    </video>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'popup',
    props: ['text', 'title', 'url']
}
</script>

<style lang="less" scoped>
.is-splash {
    background-image: url(../../assets/cover.png);
}

.tipoff-block {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, .6);
    z-index: 900;
    position: fixed;
}

.tipoff-box {
    top: 50%;
    left: 50%;
    margin-top: -290px;
    margin-left: -450px;
    padding: 24px 32px 32px;
    width: 900px;
    height: 580px;
    background: #FFF;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .2);
    border-radius: 8px;
    box-sizing: border-box;
    z-index: 901;
    position: fixed;

    .tipoff-top-box {
        margin-bottom: 24px;
        width: 100%;
        font-size: 16px;
        color: #07111B;
        line-height: 24px;
        .tipoff-close-btn {
            font-size: 24px;
            color: #93999F;
            line-height: 24px;
            cursor: pointer;
        }
    }

    .tipoff-content {
        position: relative;

        .tipoff-desc {
            padding: 12px;
            width: 386px;
            height: 88px;
            background: #FFF;
            border: 1px solid #D9DDE1;
            border-radius: 2px;
            box-sizing: border-box;
            font-size: 14px;
            color: #07111B;
            resize: none;
        }
    }

    .tipoff-btn-box {
        width: 100%;
        margin-top: 24px;

        .tipoff-submit-btn {
            width: 76px;
            height: 36px;
            background: rgba(240, 20, 20, .8);
            border-radius: 2px;
            font-size: 14px;
            color: #FFF;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
        }

        .tipoff-cancel-btn {
            margin-right: 8px;
            width: 76px;
            height: 36px;
            line-height: 36px;
            border: 1px solid #D9DDE1;
            border-radius: 2px;
            font-size: 14px;
            color: #93999F;
            text-align: center;
            cursor: pointer;
        }
    }
}

.flowplayer {
    a {
        background-color: red!important;
        background-image: url(http://www.imooc.com/static/img/index/logo_new.png)!important;
    }
}
</style>


