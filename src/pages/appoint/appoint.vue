<template>
  <div class="appoint">
    <header-tip></header-tip>

    <card></card>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'

  export default {
    data() {
      return {

      }
    },

    created() {

    },

    methods: {

    },

    components: {
      HeaderTip,
      Card
    }
  }
</script>

<style lang="less" scoped>
  .appoint {
    min-height: 100%;
    background: rgba(248, 248, 248);
  }
</style>
