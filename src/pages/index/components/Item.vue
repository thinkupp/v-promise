<template>
  <div class="appoint-item" @click="handleClick">

    <div class="top">
      <div class="user-info">
        <img :src="item.u.avatar" class="avatar">
        <span class="nickname">{{item.u.nickName}}</span>
      </div>

      <span class="create-time">{{createTime}}</span>
    </div>

    <p class="appoint-type">{{item.type}}</p>

    <div class="footer">
      <span class="startTime">开始时间：{{startTime}}</span>

      <div class="status">
        <span class="status-option">监督中</span>
        <span class="status-option">进行中</span>
      </div>
    </div>
  </div>
</template>

<script>
  import RouteServer from '../../../service/RouteServer'

  import { formatTime } from '../../../utils/index'

  export default {
    props: {
      item: {
        type: Object,
        default: null
      }
    },

    computed: {
      startTime () {
        return formatTime( this.item.startTime )
      },

      createTime () {
        return formatTime( this.item.createTime )
      }
    },

    methods: {
      handleClick () {
        RouteServer.toAppointDetail( this.item._id )
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-item {
    width: 670rpx;
    /*height: 150rpx;*/
    background: rgb(247, 247, 247);
    display: flex;
    flex-direction: column;
    margin: 30rpx auto 0 auto;
    padding: 20rpx;
    box-sizing: border-box;

    .top {
      display: flex;
      justify-content: space-between;

      .create-time {
        font-size: 26rpx;
        color: #cbcbcb;
      }

      .user-info {
        display: flex;
        align-items: center;

        .avatar {
          width: 50rpx;
          height: 50rpx;
          border-radius: 50%;
        }

        .nickname {
          font-size: 30rpx;
          margin-left: 10rpx;
        }
      }
    }

    .appoint-type {
      text-align: center;
      font-size: 39rpx;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      margin-top: 5rpx;
      padding: 10rpx 0;

      .startTime {
        font-size: 26rpx;
      }

      .status {
        display: flex;

        .status-option {
          display: inline-block;
          padding: 0 10rpx;
          border: 1rpx solid #FF4081;
          color: #FF4081;
          font-size: 22rpx;
          margin-left: 10rpx;
        }
      }
    }
  }
</style>
