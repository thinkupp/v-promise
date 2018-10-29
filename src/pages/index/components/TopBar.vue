<template>
  <ul class="top-bar" :class="{right: currentIndex === 1}">
    <li :class="{select: currentIndex === 0}" @click="handleClick(0)">
      <span class="title">我创建的</span>
    </li>
    <li :class="{select: currentIndex === 1}" @click="handleClick(1)">
      <span class="title">我参与的</span>
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
    height: 242rpx;
    line-height: 242rpx;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 33rpx;
    border-bottom-right-radius: 30%;
    transition: border-radius 0.3s linear;
    background: linear-gradient(to right, #a0c5fc,  #5677FC);

    &.right {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 30%;
      background: linear-gradient(to left, #a0c5fc,  #5677FC);
    }

    li {
      flex: 1;
      color: rgba(255, 255, 255, 0.7);

      .number {
        font-size: 30rpx
      }

      &.select {

        .title {
          color: #FFFFFF;
        }
      }
    }
  }
</style>
