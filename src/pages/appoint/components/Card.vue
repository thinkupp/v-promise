<template>
  <div class="appoint-card" v-if="detail.u">
    <div class="creator">
      <div class="user">
        <img :src="detail.u.avatar" class="avatar">
        <span class="nickname">{{detail.u.nickName}}</span>
      </div>

      <div class="handle">
        <button @click="handleBack">回首页</button>
        <button @click="handleEdit" v-if="detail.isCreator">编辑</button>
      </div>
    </div>

    <!--<p class="des">"这里是创建的时候写的备注之类的话"</p>-->
    <p class="des">{{detail.des}}</p>

    <p class="item-name">目标：</p>
    <p class="target-content">
      <span>[</span>
      {{detail.type}}
      <span>]</span>
    </p>

    <p class="item-name">有效打卡时间：</p>
    <p class="clock-in-time">
      <span class="end-time">{{endTime}}</span> 之前
    </p>

    <div class="images" v-if="detail.images.length">
      <img :src="image" v-for="(image, index) in detail.images" :key="index" class="image">
    </div>

    <!--<p class="status" :class="'status_' + detail.status">-->
      <!--{{status[detail.status]}}-->
    <!--</p>-->

    <div class="about">
      <div class="options">
        <span v-if="detail.watcherMax">监督者上限 {{detail.watcherMax}}</span>
        <span v-if="!detail.onlookers">不允许围观</span>
      </div>

      <div class="information">
        <p><i class="iconfont icon-jiandu"></i>监督者 {{detail.watcherNumber}}</p>
        <p><i class="iconfont icon-fangwenliang"></i>访问量 {{detail.access}}</p>
        <p><i class="iconfont icon-fangwen"></i>浏览人次 {{detail.visit}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatTime } from '../../../utils/index'
  import { appointStatus } from '../../../utils/types'

  export default {
    data () {
      return {
        status: appointStatus
      }
    },

    props: {
      detail: {
        type: Object,
        default: null
      }
    },

    computed: {
      endTime () {
        return formatTime(this.detail.endTime)
      }
    },

    methods: {
      handleBack () {
        wx.switchTab({
          url: '/pages/index/main'
        })
      },

      handleEdit () {
        wx.setStorageSync('APPONT_EDIT_DATA', this.detail);
        wx.navigateTo({
          url: '/pages/create/main?edit=1'
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-card {
    padding: 26rpx 50rpx;
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
      padding-bottom: 20rpx;
      position: relative;
      justify-content: space-between;

      .user {
        height: 100%;
        display: flex;
        align-items: center;
      }

      .handle {
        display: flex;
        align-items: center;

        button {
          background: #FFF;
          padding: 0 20rpx;
          font-size: 30rpx;
        }
      }

      &:after {
        width: 100%;
        height: 2rpx;
        background: #CCC;
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%) scaleY(0.5);
        padding: 0 50rpx;
      }

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

    .end-time {
      border-bottom: 1rpx solid #000;
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
      padding: 10rpx 0;
      text-align: center;
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
      padding: 10rpx 0;
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
            font-size: 36rpx;
          }
        }

        i {
          color: rgba(255, 22, 0, 0.1);
        }

        /*.icon-jiandu {*/
          /*color: #ff1600;*/
        /*}*/

        /*.icon-fangwenliang {*/
          /*color: #3F51B5;*/
        /*}*/

        /*.icon-fangwen {*/
          /*color: #fc76b2;*/
        /*}*/
      }
    }
  }
</style>
