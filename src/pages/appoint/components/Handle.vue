<template>
  <div class="appoint-handle">
    <p class="title">觉得{{gender === '2' ? '她' : '他'}}能完成这个约定吗？</p>

    <div class="button-wrapper">
      <button @click="handleSupport">
        <i class="iconfont icon-zan"></i>
        能完成
      </button>
      <button @click="handleUnSupport">
        <i class="iconfont icon-daozan"></i>
        完不成
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gender: {
        type: String,
        default: '1'
      }
    },

    methods: {
      handleSupport () {
        this.$emit('support', 1);
      },

      handleUnSupport () {
        this.$emit('support', 0);
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-handle {
    background: #FFF;
    margin-top: 75rpx;
    padding: 20rpx 0;
    margin-bottom: -50rpx;

    .title {
      text-align: center;
      font-size: 28rpx;
      color: #333;
      margin-bottom: 15rpx;
    }

    .button-wrapper {
      display: flex;
      justify-content: space-around;

      button {
        width: 200rpx;
        height: 60rpx;
        display: flex;
        background: #1890FF;
        border-radius: 10rpx;
        color: #FFF;
        font-size: 28rpx;
        justify-content: center;
        align-items: center;

        i {
          margin-right: 26rpx;
        }
      }
    }
  }
</style>
