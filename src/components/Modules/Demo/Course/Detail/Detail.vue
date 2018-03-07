<template>
    <div class="main">
        <Banner></Banner>
        <Contents></Contents>
    </div>
</template>
<script>
import Banner from './Banner'
import Contents from './Content'
export default {
    components: {
        Banner,
        Contents
    }
}
</script>

<style lang="less"  scoped>
.main {
    padding-top: 0;
    min-height: 750px;
    padding: 0 0 20px 0 20px;
    background-color: #fff;
    margin-bottom: -60px;
}

.cart-color.purple {
    background: linear-gradient(270deg, rgba(210, 115, 230, .7), #d273e6);
}
</style>

