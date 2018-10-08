<template>
  <div class="check-option">
    <span class="title">{{title}}</span>
    <v-check-box @change="handleChange" :value="select"></v-check-box>
  </div>
</template>

<script>
  import VCheckBox from './VCheckBox.vue'

  export default {
    data() {
      return {

      }
    },

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
      }
    }
  }
</script>

<style scoped lang="less">
  .check-option {
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 33rpx;
      color: #333;
    }
  }
</style>
