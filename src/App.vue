<script>
  export default {
    created() {
    },

    onLaunch( options ) {
      const that = this;
      this.globalData = this.$mp.app.globalData;
      this.globalData.scene = options.scene;

      wx.login({
        success: function (e) {
          that.$api.login({
            code: e.code,
          }).then(res => {
            if ( !res.regStatus ) {
              that.globalData.userId = res.id;
              wx.reLaunch({
                url: '/pages/register/main'
              })
            }
          }).catch(err => {
            wx.showModal({
              title: '温馨提示',
              content: JSON.stringify(err)
            })
          })
        }
      })
    }
  }
</script>

<style lang="less">
  @import './styles/global.less';
</style>





