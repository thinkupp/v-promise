<template>
  <div class="more" @click="handleClick">
    <span class="more-text">{{title}}</span>
    <span class="iconfont icon-arrow more-icon" :class="{select: on}"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        on: false
      }
    },

    computed: {
      title () {
        return this.on ? '收起更多选项' : '展开更多选项'
      }
    },

    methods: {
      handleClick () {
        this.on = !this.on;
        this.$emit( 'change', this.on )
      }
    }
  }
</script>

<style scoped lang="less">
  .more {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    margin-top: 100rpx;
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);

    .more-text {
      font-size: 35rpx;
      color: #333;
    }

    .more-icon {
      font-size: 32rpx;
      transition: all 0.3s linear;
    }

    .select {
      transform: rotate(180deg);
    }
  }
</style>
