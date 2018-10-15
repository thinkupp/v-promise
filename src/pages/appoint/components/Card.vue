<template>
  <div class="appoint-card">
    <div class="creator">
      <img :src="detail.u.avatar" class="avatar">
      <span class="nickname">{{detail.u.nickName}}</span>
    </div>

    <p class="des">
      "这里是创建的时候写的备注之类的话"
    </p>

    <p class="item-name">目标：</p>
    <p class="target-content">
      <span>[</span>
      {{detail.type}}
      <span>]</span>
    </p>

    <p class="item-name">有效打卡时间：</p>
    <p class="clock-in-time">2010/10/10 23:59:59 之前</p>

    <div class="images" v-if="detail.images.length">
      <img :src="image" v-for="(image, index) in detail.images" :key="index" class="image">
    </div>

    <p class="status">进行中</p>

    <div class="about">
      <div class="options">
        <span>每日自动创建</span>
        <span>监督者上限100</span>
        <span v-if="!detail.onlookers">不允许围观</span>
      </div>

      <div class="information">
        <p><i class="iconfont icon-jiandu"></i>监督者 120</p>
        <p><i class="iconfont icon-fangwenliang"></i>访问量 120</p>
        <p><i class="iconfont icon-fangwen"></i>浏览人次 120</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detail: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-card {
    padding: 26rpx 70rpx;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 20rpx;
    margin-top: 26rpx;
    position: relative;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 50rpx;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 20rpx;
    }

    &:before {
      width: 652rpx;
      bottom: -25rpx;
    }

    &:after {
      width: 590rpx;
      bottom: -50rpx;
    }

    .creator {
      display: flex;
      align-items: center;

      .avatar {
        width: 60rpx;
        height: 60rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }
    }

    .des {
      padding: 18rpx;
      font-size: 28rpx;
      box-sizing: border-box;
      color: #888;
    }

    .item-name {
      font-size: 32rpx;
      color: #101010;
      margin-left: 32rpx;
    }

    .target-content {
      font-size: 56rpx;
      color: #259B24;
      text-align: center;
      margin-top: -32rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 30rpx;
        margin-left: 20rpx;
        margin-right: 20rpx;
      }
    }

    .clock-in-time {
      font-size: 30rpx;
      color: #333;
      margin-left: 32rpx;
    }

    .images {
      display: flex;
      margin-left: 6rpx;
      overflow-x: auto;
      margin-right: 6rpx;
      margin-top: 28rpx;

      .image {
        width: 100rpx;
        height: 100rpx;
        flex: none;
        margin-right: 16rpx;
      }
    }

    .status {
      font-size: 36rpx;
      color: #5677FC;
      text-align: center;
    }

    .about {
      display: flex;
      justify-content: space-between;

      .options, .information {
        display: flex;
        flex-direction: column;
        font-size: 28rpx;

        span, p {
          margin-top: 6rpx;
        }
      }

      .options {
        color: #AAA4A4;
      }

      .information {

        p {
          display: flex;
          align-items: center;

          i {
            margin-right: 10rpx;
          }
        }
      }
    }
  }
</style>
