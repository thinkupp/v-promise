<template>
  <div class="index">
    <top-bar></top-bar>

    <div class="content" :class="{empty: listData.length === 0}">
      <button class="create-button" @click="handleCreate">创建新约定</button>
    </div>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  export default {
    data () {
      return {
        listData: []
      }
    },

    components: {
      TopBar
    },

    methods: {
      handleCreate () {
        this.$route.toCreate();
      }
    }
  }
</script>

<style lang="less" scoped>
  .index {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;

    .create-button {
      width: 300rpx;
      height: 100rpx;
      line-height: 100rpx;
      border-radius: 60rpx;
      background: #d81e06;
      color: #FFF;
    }

    &.empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
