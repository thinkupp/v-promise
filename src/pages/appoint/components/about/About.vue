<template>
  <div class="appoint-about">
    <tab></tab>

    <recommend></recommend>
  </div>
</template>

<script>
  import Tab from './AboutTab'
  import Recommend from './Recommend'

  export default {
    components: {
      Tab,
      Recommend
    }
  }
</script>

<style lang="less" scoped>
  .appoint-about {
    width: 692rpx;
    margin: 0 auto;
    box-shadow: 0 0 26rpx 0 #D7CCCC;
    border-radius: 20rpx;
    padding-top: 30rpx;
    padding-bottom: 18rpx;
    box-sizing: border-box;
  }
</style>

