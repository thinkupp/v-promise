<template>
  <div>
    <ul class="comment" v-if="commentList && commentList.length">
      <comment-list :noLine="index === commentList.length - 1" v-for="(comment, index) in commentList" :comment="comment" :key="index"></comment-list>
    </ul>

    <p v-else-if="!commentList" class="loading">
      <span>加载中~</span>
      <i class="iconfont icon-loading"></i>
    </p>

    <p v-else class="no-comment">
      <i class="iconfont icon-zanwushuju"></i>
      <span>暂无评论哦~</span>
    </p>
  </div>
</template>

<script>
  import CommentList from './CommentList.vue'

  export default {
    props: {
      commentList: {
        type: Array,
        default: null
      }
    },

    components: {
      CommentList
    }
  }
</script>

<style lang="less" scoped>
  .comment {
    padding: 0 50rpx;
    box-sizing: border-box;
    font-size: 28rpx;

  }

  .no-comment {
    font-size: 28rpx;
    color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon-zanwushuju {
      color: #e6e6e6;
      font-size: 100rpx;
      margin-top: -50rpx;
    }

    span {
      margin-top: 20rpx;
    }
  }

  .loading {
    font-size: 28rpx;
    color: #708339;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon-loading {
      color: #708339;
      margin-top: 10rpx;
      font-size: 50rpx;
      animation: loading-rotate 1s linear infinite;
    }

    span {
      /*margin-top: -50rpx;*/
    }
  }

  @keyframes loading-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
