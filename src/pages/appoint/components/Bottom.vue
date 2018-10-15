<template>
  <div class="speak">
    <input type="text" @input="onInput" class="speak-input">
    <button class="speak-button" @click="handleClick">发布</button>
    <div class="icon-wrapper">
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onInput ( e ) {
        this.value = e.mp.detail.value;
      },

      handleClick () {
        this.$emit('publish', this.value )
      }
    }
  }
</script>

<style scoped lang="less">
  .speak {
    width: 100%;
    height: 76rpx;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    color: #333;
    padding: 0 20rpx;
    box-sizing: border-box;

    .speak-input {
      width: 400rpx;
      height: 40rpx;
      border-radius: 30rpx;
      padding: 5rpx 20rpx;
      border: 1rpx solid #BBBBBB;
      background: #FFF;
      min-height: 0;
    }

    .speak-button {
      width: 136rpx;
      height: 55rpx;
      line-height: 55rpx;
      background: #FFF;
      font-size: 28rpx;
      border: 1rpx solid #BBBBBB;
      border-radius: 10rpx;
    }

    .icon-wrapper {
      width: 50rpx;
      height: 50rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
