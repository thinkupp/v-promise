<template>
  <div>

  </div>
</template>

<script>
  export default {
    created() {
      const that = this;
       wx.login({
         success: function (e) {
           that.$api.login({
             code: e.code,
           }).then(res => {
             getApp().globalData.userId = res.id;
             let path = '/pages/register/main';
             if ( res.regStatus ) {
               path = '/pages/index/main';
             }
             wx.reLaunch({
               url: path
             })
           }).catch(err => {
             console.log(err);
             wx.showModal({
               title: '温馨提示',
               content: JSON.stringify(err)
             })
           })
         },
         fail: function ( e ) {
           console.log(e);
         }
       })
    }
  }
</script>

<style lang="less" scoped></style>
