<template>
  <div class="appoint">
    <header-tip :detail="appointData"></header-tip>

    <div class="confirm-wrapper">
      <card :detail="appointData"></card>
      <confirm v-if="showWatchButton" @click="handleWatch" :loading="buttonAnimation" :buttonText="watchButtonText"></confirm>
      <confirm buttonText="打卡" v-if="showClockInButton" @click="handleClockIn" :loading="buttonAnimation"></confirm>
    </div>

    <handle :isCreator="appointData.isCreator"
            :support="appointData.support"
            :unSupport="appointData.unSupport"
            :isSupport="appointData.isSupport"
            @supporters="fetchSupporters"
            @unSupporters="fetchUnSupporters"
            :finish="!showClockInButton"
            v-if="showWatcherHandle"
            @support="handleSupport"></handle>

    <about :comments="comments" @comment-like="handleCommentLike" :watching="appointData.watching"></about>

    <bottom ref="bottom" @publish="publish"></bottom>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'
  import About from './components/about/About'
  import Bottom from './components/Bottom.vue'
  import Confirm from './components/Confirm.vue'
  import Handle from './components/Handle.vue'

  export default {
    data() {
      return {
        appointData: {},
        searchData: {
          startId: -1,
          size: 20
        },

        comments: null,
        watchButtonText: '监督',

        loading: false,
        buttonAnimation: false,
        commentLoading: false,
      }
    },

    computed: {
      showWatchButton () {
        // 未开始/进行中
        const appointStatus = this.appointData.status;
        return !this.appointData.watching && (appointStatus === 0 || appointStatus === 1);
      },

      showWatcherHandle () {
        // 已经是监督者
        // 监督者本人
        return this.appointData.isCreator || this.appointData.watching;
      },

      showClockInButton () {
        // 创建者本人 并且 约定进行中(目前暂且允许超时完成)
        return this.appointData.isCreator && !this.appointData.finishTime;
      },

      // disableComment () {
      //   // 不是监督者并且不是创建者的时候没有评论权
      //   return !this.appointData.watching && getApp().globalData.userId !== this.appointData.creatorId;
      // }
    },

    components: {
      HeaderTip,
      Card,
      About,
      Bottom,
      Confirm,
      Handle
    },

    methods: {
      // 发表评论
      publish ( value ) {
        if (!value.trim()) return this.$modal.emptyCommentTip();

        if (this.commentLoading) return;
        this.commentLoading = true;
        this.$api.publishComment({
          appointId: this.appointData.id,
          content: value.trim()
        }).then(comment => {
          this.commentLoading = false;
          this.$refs.bottom.clearInput();
          this.comments.unshift(comment);
        }).catch(err => {
          this.commentLoading = false;
        })
      },

      // 获取详情
      fetchAppointDetail (refresh) {
        this.$api.fetchAppointDetail({
          refresh,
          appointId: this.appointId
        }).then(res => {
          this.appointData = res;
          this.watchButtonText = '监督' + (this.appointData.u.gender === '2' ? '她' : '他');
          this.fetchAppointComments();
        })
      },

      // 获取评论
      fetchAppointComments () {
        this.$api.fetchAppointComments({
          appointId: this.appointData.id,
          startId: this.searchData.startId,
          size: this.searchData.size
        }).then(comments => {
          if (!this.comments) {
            this.comments = comments;
          } else {
            this.comments = comments.concat(this.comments);
          }
          if (comments.length) {
            this.searchData.startId = comments[comments.length - 1].id;
          }
        })
      },

      // 监督约定
      handleWatch () {
        if (this.loading) return;
        this.loading = true;
        this.buttonAnimation = true;

        this.$api.watchAppoint(this.appointData.id).then(res => {
          this.loading = false;
          this.buttonAnimation = false;
          this.fetchAppointDetail();
        }).catch (err => {
          this.loading = false;
          this.buttonAnimation = false;
        })
      },

      // 支持/不支持 某约定
      handleSupport ( support ) {
        const isSupport = this.appointData.isSupport;
        if (isSupport > -1) {
            if (support === isSupport) {
                return wx.showModal({
                    title: '提示',
                    content: '您已经选择了' + (support ? '支持' : '反对'),
                    showCancel: false
                })
            }
        }

        // 0 -> 不支持 1 -> 支持
        if (this.loading) return;
        this.loading = true;
        this.$api.supportAppoint({
          appointId: this.appointData.id,
          support
        }).then(res => {
          this.loading = false;
          // this.appointData.isSupport = support;
          this.fetchAppointDetail();
        }).catch(err => {
          this.loading = false;
        })
      },

      // 打卡
      handleClockIn () {
        if (this.loading) return;
        this.loading = true;
        this.buttonAnimation = true;
        this.$api.clockIn(this.appointData.id).then(res => {
          this.loading = false;
          this.buttonAnimation = false;
          this.fetchAppointDetail()
        }).catch(err => {
          this.loading = false;
          this.buttonAnimation = false;
        })
      },

      // 获取支持者
      fetchSupporters () {
        if (this.loading) return;
        this.loading = true;
        this.$api.supporters(this.appointData.id).then(res => {
          if (!res.length) {
            wx.showToast({
              title: '暂时没有支持者哦~',
              icon: 'none'
            })
          }
          this.loading = false;
        }).catch(err => {
          this.loading = false;
        })
      },

      // 获取反对者
      fetchUnSupporters () {
        if (this.loading) return;
        this.loading = true;
        this.$api.unSupporters(this.appointData.id).then(res => {
          if (!res.length) {
            wx.showToast({
              title: '暂时没有反对者哦',
              icon: 'none'
            })
          }
          this.loading = false;
        }).catch(err => {
          this.loading = false;
        })
      },

      // 点赞/取消点赞评论
      handleCommentLike ( {commentId, index} ) {
        const comment = this.comments[index];
        if (comment.loading) return;
        comment.loading = true;
        this.$set(this.comments, index, comment);

        this.$api.commentLike({
          appointId: this.appointData.id,
          commentId
        }).then(res => {
          comment.loading = false;
          comment.parise = res.number;
          comment.isLike = res.like;
          this.$set(this.comments, index, comment);
        }).catch(err => {
          comment.loading = false;
          this.$set(this.comments, index, comment);
        })
      }
    },

    onLoad ( e ) {
      this.appointId = e.id;
      this.fetchAppointDetail();
    }
  }
</script>

<style lang="less" scoped>
  .appoint {
    min-height: 100%;
    background: #F8F8F8;
    padding-bottom: 96rpx;
    box-sizing: border-box;

    .confirm-wrapper {
      position: relative;
    }
  }
</style>
