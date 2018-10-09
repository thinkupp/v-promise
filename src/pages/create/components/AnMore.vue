<template>
  <div class="more common-cell" @click="handleClick" :class="{off: !on}">
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
    justify-content: space-between;

    &.off {
      border-bottom: 1rpx solid rgba(0, 0, 0, 0.05);
    }

    .more-text {
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
