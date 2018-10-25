<template>
  <div class="register">
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getUserInfo (e) {
        const detail = e.mp.detail;
        if (detail.userInfo) {
          this.$api.register({
            detail,
            systemInfo: wx.getSystemInfoSync(),
            scene: getApp().globalData.scene,
          }).then(res => {
            getApp().globalData.u = res.u;
            wx.reLaunch({
              url: '/pages/index/main'
            })
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
