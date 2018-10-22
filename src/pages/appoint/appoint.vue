<template>
  <div class="appoint">
    <header-tip :detail="appointData"></header-tip>

    <div class="confirm-wrapper">
      <card :detail="appointData"></card>
      <confirm @click="handleWatch" :loading="loading" :buttonText="watchButtonText"></confirm>
    </div>

    <about :comments="comments"></about>

    <bottom :disable-comment="disableComment" ref="bottom" @publish="publish"></bottom>
  </div>
</template>

<script>
  import HeaderTip from './components/HeaderTip'
  import Card from './components/Card'
  import About from './components/about/About'
  import Bottom from './components/Bottom.vue'
  import Confirm from './components/Confirm.vue'

  export default {
    data() {
      return {
        appointData: {},
        searchData: {
          startId: -1,
          size: 20
        },
        comments: null,
        loading: false,
        watchButtonText: '监督'
      }
    },

    computed: {
      showWatcherButton () {
        // 监督者本人
        // 已结束/按时完成/超时完成
        // 监督者已达到上限（显示）*
      },

      disableComment () {
        // 不是监督者并且不是创建者的时候没有评论权
        return !this.appointData.watching && getApp().globalData.userId !== this.appointData.creatorId;
      }
    },

    components: {
      HeaderTip,
      Card,
      About,
      Bottom,
      Confirm
    },

    methods: {
      publish ( value ) {
        if (!value.trim()) return this.$modal.emptyCommentTip();

        this.$api.publishComment({
          appointId: this.appointData.id,
          content: value.trim()
        }).then(comment => {
          this.$refs.bottom.clearInput();
          this.comments.unshift(comment);
        })
      },

      fetchAppointDetail ( id ) {
        this.$api.fetchAppointDetail( id ).then(res => {
          this.appointData = res;
          this.watchButtonText = '监督' + (this.appointData.u.gender === '2' ? '她' : '他');
          this.fetchAppointComments();
        })
      },

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

      handleWatch () {
        if (this.loading) return;
        this.loading = true;
        this.$api.watchAppoint(this.appointData.id).then(res => {
          this.loading = false;
        }).catch (err => {
          this.loading = false;
        })
      }
    },

    onLoad ( e ) {
      this.fetchAppointDetail( e.id );
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
