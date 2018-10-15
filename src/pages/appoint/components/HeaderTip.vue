<template>
  <div class="header-tip">
    <div class="about">
      <i class="iconfont icon-shizhong"></i>

      <div class="tip">
        <p class="title">约定已开启，已有100人监督！</p>
        <p class="des">千万别忘了打卡完成约定哦~</p>
      </div>
    </div>

    <i class="iconfont icon-sanjiaoright"></i>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .header-tip {
    height: 123rpx;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30rpx;
    box-sizing: border-box;
    box-shadow: 0 6rpx 12rpx 0 #AAAAAA;

    .tip {
      margin-left: 16rpx;

      .title {
        font-size: 32rpx;
        color: #189D99;
      }

      .des {
        font-size: 24rpx;
        margin-top: 6rpx;
        color: #9B9292;
      }
    }

    .about {
      display: flex;
      height: 100%;
      align-items: center;

      .icon-shizhong {
        font-size: 52rpx;
        color: #87AA35;
      }
    }

    .icon-sanjiaoright {
      color: #A29898;
      font-size: 30rpx;
    }
  }
</style>
