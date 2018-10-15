<template>
  <div class="index">
    <div class="bar-wrapper">
      <top-bar></top-bar>
      <button class="create-button" @click="handleCreate">创建</button>
    </div>

    <div class="content" :class="{empty: listData.length === 0}">
      <item></item>
    </div>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import Item from './components/Item'

  export default {
    data () {
      return {
        listData: [],
        searchData: {
          startIndex: 0,
          count: 20
        }
      }
    },

    components: {
      TopBar,
      Item
    },

    methods: {
      handleCreate () {
        this.$route.toCreate();
      },
      fetchCreateAppoint () {
        this.$api.fetchCreateAppoint( this.searchData ).then(res => {
          console.log(res);
        })
      }
    },

    onLoad () {
      this.fetchCreateAppoint();
    }
  }
</script>

<style lang="less" scoped>
  .index {
    height: 100%;
    display: flex;
    flex-direction: column;

    .bar-wrapper {
      height: 242rpx;
      position: relative;

      .create-button {
        width: 380rpx;
        height: 100rpx;
        line-height: 100rpx;
        background: #687CCC;
        font-size: 36rpx;
        position: absolute;
        bottom: -50rpx;
        left: 50%;
        transform: translateX(-50%);
        color: #FFF;
        border-radius: 50rpx;
        letter-spacing: 5rpx;
        box-shadow: 0 16rpx 16rpx rgba(0, 0, 0, 0.25);
      }
    }
  }

  .content {
    flex: 1;
    margin-top: 100rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
  }
</style>
