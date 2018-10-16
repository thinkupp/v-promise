<template>
  <div class="item">

    <div class="user-info">
      <img :src="item.u.avatar" class="avatar">
      <span>{{item.u.nickName}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: function() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .item {
    width: 670rpx;
    height: 150rpx;
    background: rgb(247, 247, 247);
    display: flex;
    align-items: center;
    margin-top: 30rpx;
    padding: 0 10rpx;
    box-sizing: border-box;

    .user-info {
      display: flex;

      .avatar {
        width: 100rpx;
        height: 100rpx;
      }
    }


  }
</style>
