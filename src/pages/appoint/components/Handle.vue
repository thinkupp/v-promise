<template>
  <div class="appoint-handle" :class="{finish}">
    <p class="title" v-if="isCreator">你的朋友们对你的支持情况：</p>
    <p class="title" v-else>觉得{{gender === '2' ? '她' : '他'}}能完成这个约定吗？</p>

    <div class="button-wrapper" v-if="!isCreator">
        <button @click="handleSupport" :class="{select: isSupport === 1}">
        <i class="iconfont icon-zan"></i>
        <span>能完成</span>
        <span v-if="isSupport !== -1" class="support">{{support}}</span>
      </button>

      <button @click="handleUnSupport" :class="{select: isSupport === 0}">
        <i class="iconfont icon-daozan"></i>
        <span>完不成</span>
        <span v-if="isSupport !== -1" class="support">{{unSupport}}</span>
      </button>
    </div>

    <div class="button-wrapper creator" v-else :class="{finish: !paddingTop}">
      <div @click="fetchSupporters">
         <i class="iconfont icon-zan"></i>
         <span>能完成</span>
         <span>{{support}}</span>
      </div>
      <div @click="fetchUnSupporters">
         <i class="iconfont icon-daozan"></i>
         <span>完不成</span>
         <span>{{unSupport}}</span>
      </div>
    </div>
 </div>
</template>

<script>
  export default {
    props: {
      gender: {
        type: String,
        default: '1'
      },

      isCreator: {
        type: Boolean,
        default: false
      },

      isSupport: {
        type: Number,
        default: -1
      },

      support: {
        type: Number,
        default: 0
      },

      unSupport: {
        type: Number,
        default: 0
      },

      finish: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      handleSupport () {
        this.$emit('support', 1);
      },

      handleUnSupport () {
        this.$emit('support', 0);
      },

      fetchSupporters () {
        this.$emit('supporters')
      },

      fetchUnSupporters () {
        this.$emit('unSupporters')
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-handle {
    background: #FFF;
    margin-top: 75rpx;
    padding: 60rpx 0 20rpx 0;
    margin-bottom: -50rpx;

    &.finish {
      padding: 20rpx 0;
    }

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

        .support {
          margin-left: 10rpx;
        }
      }

      button.select {
        background: #3F51B5;
          span, i {
            color: #ffdd65;
          }
      }
    }

    .creator {
      display: flex;
      justify-content: space-around;
      font-size: 28rpx;

      div {
        display: flex;
        width: 200rpx;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
</style>
