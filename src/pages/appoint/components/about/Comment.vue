<template>
  <div>
    <ul class="comment" v-if="commentList.length">
      <li>
        <div class="information">
          <div class="creator">
            <img src="/res/images/template-select.png" class="avatar">
            <div class="right">
              <div class="top">
                <span class="nickname">Nickname</span>
                <span class="look">督</span>
                <span class="report">举报</span>
              </div>
              <span class="time">2010-10-10 00:00:00</span>
            </div>
          </div>

          <div class="handle">
            <i class="iconfont icon-dianzan"></i>
            <span class="zan-number">111</span>
          </div>
        </div>

        <p class="content">这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..</p>
      </li>

      <li>
        <div class="information">
          <div class="creator">
            <img src="/res/images/template-select.png" class="avatar">
            <div class="right">
              <div class="top">
                <span class="nickname">Nickname</span>
                <span class="look">督</span>
              </div>
              <span class="time">2010-10-10 00:00:00</span>
            </div>
          </div>

          <div class="handle">
            <i class="iconfont icon-dianzan"></i>
            <span class="zan-number">111</span>
          </div>
        </div>

        <p class="content">这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..这里是评论的内容..</p>
      </li>
    </ul>

    <p v-else class="no-comment">
      <i class="iconfont icon-zanwushuju"></i>
      <span>暂无评论哦~</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      commentList: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .comment {
    padding: 0 50rpx;
    box-sizing: border-box;
    font-size: 28rpx;

    li {
      margin-top: 28rpx;

      .information {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .creator {
          display: flex;

          .avatar {
            width: 78rpx;
            height: 78rpx;
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
              }

              .look {
                margin-left: 5rpx;
              }

              .report {
                margin-left: 5rpx;
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

          .zan-number {
            margin-left: 16rpx;
            color: #333;
          }
        }
      }

      .content {
        color: #888;
        margin-top: 10rpx;
      }
    }
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
</style>
