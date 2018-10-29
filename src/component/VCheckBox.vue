<template>
  <div class="v-check-box" @click="handleClick" :class="{select}">
    <span class="iconfont icon-duihao icon" v-show="select"></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        select: false
      }
    },

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    onLoad () {
      this.select = this.value;
    },

    methods: {
      handleClick () {
        this.select = !this.select;
        this.$emit('change', this.select);
      }
    }
  }
</script>

<style scoped lang="less">
  .v-check-box {
    width: 36rpx;
    height: 36rpx;
    border: 1rpx solid #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;

    &.select {
      background: #009688;
    }

    .icon {
      color: #FFF;
    }
  }
</style>
