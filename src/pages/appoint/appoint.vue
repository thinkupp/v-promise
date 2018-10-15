<template>
  <div class="appoint">
    <header-tip></header-tip>

    <card></card>

    <about></about>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'
  import About from './components/about/About'

  export default {
    components: {
      HeaderTip,
      Card,
      About
    }
  }
</script>

<style lang="less" scoped>
  .appoint {
    min-height: 100%;
    background: rgba(248, 248, 248);
    padding-bottom: 20rpx;
  }
</style>
