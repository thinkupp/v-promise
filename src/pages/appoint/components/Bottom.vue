<template>
  <div class="speak">
    <div class="wrapper">
      <input :disabled="disableComment" type="text" v-model="value" @input="onInput" class="speak-input">
      <span class="tip" v-if="disableComment">监督者才可以评论</span>
    </div>
    <button :disabled="disableComment" class="speak-button" @click="handleClick">发布</button>
    <div class="icon-wrapper">
      <i class="iconfont icon-fenxiang"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    },

    methods: {
      clearInput () {
        this.value = ''
      },

      handleClick () {
        if (this.disableComment) {
          return this.$modal.noCommentAuthority();
        }

        this.$emit('publish', this.value );
      }
    },

    props: {
      disableComment: {
        type: Boolean,
        default: false
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

    .wrapper {
      position: relative;

      .tip {
        display: inline-block;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        color: #CCC;
        z-index: 1000;
      }
    }
  }
</style>
