<template>
  <ul class="top-bar">
    <li :class="{select: currentIndex === 0}" @click="handleClick(0)">
      <span class="title">已创建</span>
      <span class="number"> 0</span>
    </li>
    <li :class="{select: currentIndex === 1}" @click="handleClick(1)">
      <span class="title">已监督</span>
      <span class="number"> 0</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },

    methods: {
      handleClick ( index ) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit('change', index)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .top-bar {
    height: 120rpx;
    line-height: 120rpx;
    display: flex;
    text-align: center;

    li {
      flex: 1;

      .number {
        font-size: 30rpx
      }

      &.select {

        .title {
          color: #d81e06;
          border-bottom: 1rpx solid #d81e06;
        }
      }
    }
  }
</style>
