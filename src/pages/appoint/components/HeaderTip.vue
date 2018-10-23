<template>
  <div class="header-tip">
    <div class="about">
      <i class="iconfont" :class="iconClass"></i>

      <div class="tip">
        <p class="title" :class="titleClass">{{tipContent}}</p>
        <p class="des">{{detail.title}}</p>
      </div>
    </div>

    <i class="iconfont icon-sanjiaoright"></i>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tipContent: '',
        titleClass: ''
      }
    },

    props: {
      detail: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },

    computed: {
      iconClass () {
        if (!this.detail.u) return '';
        const status = this.detail.status;
        const isCreator = this.detail.isCreator;
        const people = isCreator ? '你' : this.detail.u.gender === '2' ? '她' : '他';
        let classStr = '';
        if (status === 0) {
          this.tipContent = '约定未开启，' + (isCreator ? '邀请朋友来监督你！' : '晚点再来吧~');
          classStr = 'icon-dengdai'
        }

        if (status === 1) {
          if (this.detail.watcherNumber) {
            this.tipContent = '约定已开启，已有' + (this.detail.watcherNumber + '人监督' + people + '！');
          } else {
            this.tipContent = '约定已开启，' + (isCreator ? '邀请朋友来监督你！' : '记得提醒' + people + '！');
          }
          classStr = 'icon-shizhong'
        }

        if (status === 2) {
          this.tipContent = '约定已结束，未完成约定';
          classStr = 'icon-jieshu'
        }

        if (status === 3) {
          this.tipContent = '约定已结束，已按时完成！';
          classStr = 'icon-anshiwancheng'
        }

        if (status === 4) {
          this.tipContent = '约定已结束，超时完成了！';
          classStr = 'icon-chaoshiwancheng'
        }

        const titleClass= 'status_' + this.detail.status;
        this.titleClass = titleClass;
        return classStr + ' ' + titleClass;
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-tip {
    height: 123rpx;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30rpx;
    box-sizing: border-box;
    box-shadow: 0 6rpx 12rpx 0 #AAAAAA;

    .tip {
      margin-left: 16rpx;

      .title {
        font-size: 32rpx;
        color: #189D99;
      }

      .des {
        font-size: 24rpx;
        margin-top: 6rpx;
        color: #9B9292;
      }
    }

    .about {
      display: flex;
      height: 100%;
      align-items: center;

      i {
        font-size: 52rpx;
        color: #87AA35;
      }
    }

    .icon-sanjiaoright {
      color: #A29898;
      font-size: 30rpx;
    }
  }
</style>
