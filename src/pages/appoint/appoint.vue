<template>
  <div class="appoint">
    <header-tip></header-tip>

    <card></card>

    <about></about>

    <bottom @publish="publish"></bottom>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'
  import About from './components/about/About'
  import Bottom from './components/Bottom.vue'

  export default {
    components: {
      HeaderTip,
      Card,
      About,
      Bottom
    },

    methods: {
      publish ( value ) {
        console.log('发表了评论：', value);
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint {
    min-height: 100%;
    background: #F8F8F8;
    padding-bottom: 96rpx;
  }
</style>
