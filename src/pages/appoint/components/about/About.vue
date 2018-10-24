<template>
  <div class="appoint-about">
    <tab @change="tabChange"></tab>

    <comment :watching="watching" @comment-like="commentLike" :commentList="comments"></comment>
  </div>
</template>

<script>
  import Tab from './AboutTab'
  import Comment from './Comment.vue'

  export default {
    components: {
      Tab,
      Comment
    },

    props: {
      comments: {
        type: Array,
        default: function () {
          return []
        }
      },

      watching: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      commentLike ( params ) {
        this.$emit('comment-like', params)
      },

      tabChange ( index ) {
        if (index) {
          wx.showModal({
            title: '提示',
            content: '功能暂未开放！',
            showCancel: false
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .appoint-about {
    width: 692rpx;
    margin: 82rpx auto 0 auto;
    box-shadow: 0 0 26rpx 0 #D7CCCC;
    border-radius: 20rpx;
    padding-top: 30rpx;
    padding-bottom: 18rpx;
    box-sizing: border-box;
    background: #FFF;
  }
</style>
