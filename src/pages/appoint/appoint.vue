<template>
  <div class="appoint">
    <header-tip></header-tip>

    <div class="confirm-wrapper">
      <card :detail="appointData"></card>
      <confirm></confirm>
    </div>

    <about></about>

    <bottom @publish="publish"></bottom>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'
  import About from './components/about/About'
  import Bottom from './components/Bottom.vue'
  import Confirm from './components/Confirm.vue'

  import ApiServer from '../../service/ApiServer'

  export default {
    data() {
      return {
        appointData: {}
      }
    },

    components: {
      HeaderTip,
      Card,
      About,
      Bottom,
      Confirm
    },

    methods: {
      publish ( value ) {
        console.log('发表了评论：', value);
      },

      fetchAppointDetail ( id ) {
        ApiServer.fetchAppointDetail( id ).then(res => {
          this.appointData = res;
        })
      }
    },

    onLoad ( e ) {
      this.fetchAppointDetail( e.id );
    }
  }
</script>

<style lang="less" scoped>
  .appoint {
    min-height: 100%;
    background: #F8F8F8;
    padding-bottom: 96rpx;
    box-sizing: border-box;

    .confirm-wrapper {
      position: relative;
    }
  }
</style>
