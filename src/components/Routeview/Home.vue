<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
    <div class="home">
        <head-nav></head-nav>
        <div class="left-fixed-right-auto">
            <!-- <left-menu></left-menu> -->
            <div class="right-content">
                <div class="content" :style="{marginLeft:$store.state.leftmenu.width}">
                    <!-- <bread></bread> -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <FooterJs></FooterJs>
    </div>
</template>
<script>
import Common from '../Common/';
export default {
    name: 'home',
    components: Common
}
</script>
<style scoped lang='less'>
.content {
    margin-top: 60px;
    background: #FFF; // padding: 16px;
}

.right-content {
    // margin-bottom: 60px;
}
</style>
