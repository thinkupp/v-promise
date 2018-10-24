<template>
  <button class="confirm" :class="{loading}"  @click="handleClick">{{buttonText}}</button>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        this.$emit('click')
      }
    },

    props: {
      loading: {
        type: Boolean,
        default: false
      },

      buttonText: {
        type: String,
        default: '监督'
      }
    }
  }
</script>

<style scoped lang="less">
  .confirm {
    width: 130rpx;
    height: 130rpx;
    background: #5677FC;
    color: #FFF;
    border-radius: 50%;
    border: 15rpx solid #F8F8F8;
    position: absolute;
    left: 50%;
    bottom: -120rpx;
    transform: translateX(-50%);
    font-size: 26rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animation 1s linear infinite, borderColorAnimation 3s linear infinite;
  }

  .loading {
    animation: loadingAnimation 0.6s linear infinite;
  }

  @keyframes animation {
    0% {
      transform: translateX(-50%) scale(0.9);
    }

    50% {
      transform: translateX(-50%) scale(1);
    }

    100% {
      transform: translateX(-50%) scale(0.9);
    }
  }

  @keyframes loadingAnimation {
    0% {
      transform: translateX(-50%) rotate(0)
    }

    100% {
      transform: translateX(-50%) rotate(360deg)
    }
  }

  @keyframes borderColorAnimation {
    0% {
      border-color: #efffee;
    }

    50% {
      border-color: #d7dcdf;
    }
  }
</style>
