<template>
  <div class="appoint-about">
    <tab></tab>

    <comment></comment>
  </div>
</template>

<script>
  import Tab from './AboutTab'
  import Comment from './Comment.vue'

  export default {
    components: {
      Tab,
      Comment
    }
  }
</script>

<style lang="less" scoped>
  .appoint-about {
    width: 692rpx;
    margin: 82rpx auto 0 auto;
    box-shadow: 0 0 26rpx 0 #D7CCCC;
    border-radius: 20rpx;
    padding-top: 30rpx;
    padding-bottom: 18rpx;
    box-sizing: border-box;
    background: #FFF;
  }
</style>
