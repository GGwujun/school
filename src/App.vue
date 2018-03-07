<template>
  <div id="app">
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {

  },
  mounted() {
    //console.log(this.$$ajax);
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (!to.matched.length) {
        this.$router.push('/404');
      }
    }
  }
}
</script>

<style  lang='less'>
.bounce-enter-active {
  animation: bounce-in .5s;
  -webkit-animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-out .2s;
  -webkit-animation: bounce-out .2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0);
  }
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-weight: normal;
  font-family: "Microsoft YaHei";
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.clearfix:after {
  content: '\0020';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

[class^="imv2-"],
[class*=" imv2-"] {
  font-family: 'imv2' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.r {
  float: right;
}

.l {
  float: left;
}


ol,
ul {
  list-style: none;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

:link,
:visited,
ins {
  text-decoration: none;
}

a {
  background-color: transparent;
}

.w {
  max-width: 1200px;
  margin: 0 auto;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var,
optgroup {
  font-style: normal;
  font-weight: 400;
}

.bdshare-button-style0-16 {
  zoom: 1;

  &:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }

  a,
  .bds_more {
    float: left;
    font-size: 12px;
    padding-left: 17px;
    line-height: 16px;
    height: 16px;
    background-image: url(./assets/icons_0_16.png?v=91362611.png);
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 6px 6px 6px 0;
  }
}

.green-box a.active,
.green-box a:hover {
  color: #00b43c;
}

[class*=" icon-"],
[class^=icon-] {
  font-family: icomoon!important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

