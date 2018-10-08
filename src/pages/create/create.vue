<template>
  <div>
    <van-cell-group>
      <picker :range="typeRange">
        <van-cell title="选择类型" label="想要别人监督你什么呢" value="起床" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <time-picker title="生效时间"></time-picker>
    <time-picker title="失效时间"></time-picker>
  </div>
</template>

<script>
  import TimePicker from '../../component/TimePicker.vue'

  export default {
    data() {
      return {
        typeRange: ['起床'],
        showAction: false,
        desc: '有你们在一旁，我可能动力会大些！'
      }
    },

    mounted() {
      this.initData();
    },

    methods: {
      initData () {

      }
    },

    components: {
      TimePicker
    }
  }
</script>

<style lang="less" scoped>
  .action {
    z-index: 99999;
  }

  .abc {
    color: #00c000;
  }
</style>
