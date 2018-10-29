<template>
  <div class="time-picker common-cell" :class="{'hide-border': !border}">
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
      },

      value: {
        type: String,
        default: ''
      },

      border: {
        type: Boolean,
        default: false
      }
    },

    onLoad() {
      this.initData();
    },

    methods: {
      initData () {
        const time = this.value.split(' ');
        console.log(time);
        this.part1 = time[0];
        this.part2 = time[1];
      },

      dateChange ( e ) {
        this.part1 = e.mp.detail.value;
        this.changeEmit();
      },

      timeChange ( e ) {
        this.part2 = e.mp.detail.value;
        this.changeEmit();
      },

      changeEmit () {
        this.$emit('date-change', this.part1 + ' ' + this.part2)
      }
    },
  }
</script>

<style scoped lang="less">
  .time-picker {
    background-color: #FFF;

    &.hide-border::after {
      border: none;
    }

    .left, .right {
      flex: 1;
    }

    .right {
      display: flex;
      justify-content: flex-end;

      .part2 {
        margin-left: 10px;
      }
    }
  }
</style>
