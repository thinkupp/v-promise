<template>
  <div class="time-picker">
    <span class="left">{{title}}</span>

    <div class="right">
      <picker @change="dateChange" mode="date">{{part1}}</picker>
      <picker @change="timeChange" mode="time" class="part2">{{part2}}</picker>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        part1: '0000-00-00',
        part2: '07:30'
      }
    },

    props: {
      title: {
        type: String,
        default: ''
      }
    },

    mounted() {
      this.initData();
    },

    methods: {
      initData () {
        const time = new Date();
        const year = time.getFullYear();
        let month = time.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = time.getDate();
        day = day < 10 ? '0' + day : day;
        this.part1 = `${year}-${month}-${day}`
      },

      dateChange ( e ) {
        this.part1 = e.mp.detail.value;
      },

      timeChange ( e ) {
        this.part2 = e.mp.detail.value;
      }
    },
  }
</script>

<style scoped lang="less">
  .time-picker {
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    color: #333;
    background-color: #FFF;
    font-size: 32rpx;
    display: flex;
    border-bottom: 1rpx solid #e6e6e6;

    .left, .right {
      flex: 1;
    }

    .right {
      display: flex;
      justify-content: flex-end;

      .part2 {
        margin-left: 15rpx;
      }
    }
  }
</style>
