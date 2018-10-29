<template>
  <div class="mine">
    <div class="user-info">
      <div class="about">
        <img class="avatar" :src="userInfo.avatar">
        <span class="nickname">{{userInfo.nickName}}</span>
      </div>

      <button class="update-button">更新资料</button>
    </div>

    <van-cell-group>
      <van-cell title="我的足迹" @click="fetchVisitRecord"/>
      <van-cell title="意见反馈"/>
      <van-cell title="举报"/>
    </van-cell-group>

    <button @click="fetchAccessRecord">足迹</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {nickName: ''}
      }
    },

    mounted() {
      this.userInfo = getApp().globalData.u;
    },

    methods: {
      fetchAccessRecord() {
        this.$api.accessRecord([]).then(res => {
          console.log(res);
        })
      },

      fetchVisitRecord() {
				wx.navigateTo({
					url: '/pages/visit/main'
				})
      }
    }
  }
</script>

<style lang="less" scoped>
  .mine {
    background: #F8F8F8;
    height: 100%;
    overflow: auto;

    .user-info {
      display: flex;
      background: #FFF;
      padding: 25rpx 30rpx;
      box-sizing: border-box;
      justify-content: space-between;
      margin-top: 20rpx;

      .avatar {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
      }

      .nickname {
        font-size: 28rpx;
        color: #333;
        margin-left: 20rpx;
      }

      .update-button {
        background: transparent;
        /*border: 1rpx solid #78cdff;*/
      }
    }
  }

</style>
