<template>
  <li :class="{noLine}">
    <div class="information">
      <div class="creator">
        <img :src="comment.avatar" class="avatar">

        <div class="right">
          <div class="top">
            <span class="nickname" :class="{creator}">{{comment.nickName}}</span>
            <span class="watcher" v-if="watching">督</span>
            <span class="report">举报</span>
          </div>
          <span class="time">{{createTime}}</span>
        </div>
      </div>

      <div class="handle" :class="{like: comment.isLike, animation: comment.loading}" @click="handleClick">
        <span class="zan-number">{{comment.parise}}</span>
        <i class="iconfont icon-weizan" v-if="!comment.isLike"></i>
        <i class="iconfont icon-yizan" v-else></i>
      </div>
    </div>

    <p class="content" @click="handleClickContent">{{comment.content}}</p>
  </li>
</template>

<script>
  import { formatTime } from '../../../../utils/index'

  export default {
    props: {
      comment: {
        type: Object,
        default: function () {
          return {}
        }
      },

      noLine: {
        type: Boolean,
        default: false
      },

      watching: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      createTime () {
        return formatTime(this.comment.createTime)
      },

      creator () {
        return this.comment.userId === getApp().globalData.userId
      }
    },

    methods: {
      handleClick () {
        this.$emit('like', this.comment.id);
      },

      handleClickContent () {
				const that = this;

        wx.showActionSheet({
          itemList: ['回复', '举报', '复制'],
					success(e) {
						const i = e.tapIndex;
						if (i === 2) {
							wx.setClipboardData({
								data: that.comment.content
							})
						}
					}
        })
      }
    }
  }
</script>

<style scoped lang="less">
  li {
    margin-top: 30rpx;
    position: relative;
    padding-bottom: 10rpx;

    .information {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .creator {
        display: flex;
        align-items: center;

        .avatar {
          width: 50rpx;
          height: 50rpx;
          border-radius: 50%;
        }

        .right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 16rpx;

          .top {
            display: flex;

            .nickname {
              color: #333;

              &.creator {
                color: #e80006;
              }
            }

            .watcher {
              margin-left: 10rpx;
              text-shadow: 6rpx 6rpx 6rpx #AAAAAA;
              color: #E51C23;
              background: #FFF;
              font-size: 28rpx;
            }

            .report {
              margin-left: 20rpx;
              color: #3F51B5;
              font-size: 28rpx;
            }
          }

          .time {
            color: #B7ADAD;
            font-size: 25rpx;
          }
        }
      }

      .handle {
        display: flex;
        font-size: 28rpx;
        align-items: center;
        padding: 6rpx;
        color: #CCC;

        .zan-number {
          margin-right: 8rpx;
        }

        &.like {
          .zan-number, i {
            color: #ff0010
          }
        }

        &.animation {
          i, span {
            animation: handleAnimation 0.6s linear infinite 0.3s;
          }
        }
      }
    }

    .content {
      color: #888;
      margin-top: 10rpx;
      padding: 0 20rpx;
      box-sizing: border-box;
      word-wrap: break-word;
    }

    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1rpx;
      transform: translateX(-50%) scaleY(0.5);
      background: #e9e9e9;
      left: 50%;
      bottom: 0;
      padding: 0 15rpx;
    }
  }

  .noLine:after {
    height: 0;
  }

  @keyframes handleAnimation {
    0% {
      color: #faffc9;
    }

    50% {
      color: #ff0010
    }

    100% {
      color: #faffc9;
    }
  }
</style>
