<template>
  <div class="register">
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">授权</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getUserInfo (e) {
        console.log(e);
        const detail = e.mp.detail;
        if (detail.userInfo) {
          this.$api.register({
            detail,
            systemInfo: wx.getSystemInfoSync(),
            scene: getApp().scene
          }).then(_ => {
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
