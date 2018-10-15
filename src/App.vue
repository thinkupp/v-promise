<script>
  export default {
    created() {
    },

    onLaunch( options ) {
      this.globalData = this.$mp.app.globalData;
      this.globalData.scene = options.scene;
    }
  }
</script>

<style lang="less">
  @import './styles/global.less';
</style>





