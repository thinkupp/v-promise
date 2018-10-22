<template>
  <div class="index">
    <div class="bar-wrapper">
      <top-bar @change="topBarChange"></top-bar>
      <button class="create-button" @click="handleCreate">创建</button>
    </div>

    <div class="content" v-if="currentIndex === 0" :class="{empty: createAppointList.length === 0}">
      <item v-for="(item, index) in createAppointList" :item="item" :key="index"></item>
    </div>

    <div class="content" v-if="currentIndex === 1" :class="{empty: joinAppointList.length === 0}">
      <item :showWatchTip="true" v-for="(item, index) in joinAppointList" :item="item" :key="index"></item>
    </div>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import Item from './components/Item'

  export default {
    data () {
      return {
        createAppointList: [],
        joinAppointList: [],

        createSearchData: {
          id: 0,
          size: 20
        },

        joinSearchData: {
          startId: -1,
          size: 20
        },
        currentIndex: 0
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
        this.$api.fetchCreateAppoint( this.createSearchData ).then(data => {
          this.createAppointList = data;
//          this.searchData.id = this.listData[this.listData.length - 1].id;
        })
      },

      fetchJoinAppoint () {
        this.$api.fetchJoinAppoint(this.joinSearchData).then(res => {
          this.joinAppointList = res;
        })
      },

      topBarChange ( index ) {
        this.currentIndex = index;
        if (index === 0) {
          this.fetchCreateAppoint();
        }

        if (index === 1) {
          this.fetchJoinAppoint();
        }
      }
    },

    onShow () {
      if (this.currentIndex === 0) {
        this.fetchCreateAppoint();
      } else {
        this.fetchJoinAppoint();
      }
    }
  }
</script>

<style lang="less" scoped>
  .index {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    padding-bottom: 30rpx;

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
    margin-top: 60rpx;
    padding: 0 30rpx;
    box-sizing: border-box;
  }
</style>
