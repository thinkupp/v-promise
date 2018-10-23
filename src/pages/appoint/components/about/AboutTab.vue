<template>
  <ul class="tab">
    <li class="recommend">
      <span class="select">评论</span>
    </li>
    <li class="dynamic">
        <span>
          动态
          <span class="round"></span>
        </span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .tab {
    font-size: 28rpx;
    color: #333;
    display: flex;
    /*padding-bottom: 44rpx;*/

    li {
      flex: 1;
      text-align: center;

      span {
        padding-bottom: 16rpx;
        position: relative;

        &.select {
          color: #FF4081;

          &::before {
            position: absolute;
            content: '';
            width: 122rpx;
            height: 1px;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            background: #FF4081;
          }
        }

        .round {
          padding-bottom: 0;
          position: absolute;
          top: -5rpx;
          right: -15rpx;
          width: 12rpx;
          height: 12rpx;
          border-radius: 50%;
          background: #E51C23;
        }
      }
    }
  }
</style>
