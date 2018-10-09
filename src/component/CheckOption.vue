<template>
  <div class="check-option common-cell">
    <div class="left">
      <span class="title">{{title}}</span>
      <span class="iconfont icon-wenhao icon" @click="handleQuestion"></span>
    </div>

    <v-check-box @change="handleChange" :value="select"></v-check-box>
  </div>
</template>

<script>
  import VCheckBox from './VCheckBox.vue'

  export default {
    components: {
      VCheckBox
    },

    props: {
      title: {
        type: String,
        default: ''
      },

      select: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      handleChange ( value ) {
        this.$emit('change', value)
      },

      handleQuestion () {
        this.$emit('question');
      }
    }
  }
</script>

<style scoped lang="less">
  .check-option {
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      .icon {
        margin-left: 10rpx;
        font-size: 20px;
        color: #3388ff;
      }
    }
  }

</style>
