<script>
  export default {
    data() {
      return {
        scene: ''
      }
    },

    created() {
    },

    onLaunch( options ) {
      const that = this;
      this.scene = options.scene;

      wx.login({
        success: function (e) {
          that.$api.login({
            code: e.code,
          }).then(res => {
            if (res.register) {
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





