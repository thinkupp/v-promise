<template>
  <div>
    <van-cell-group>
      <picker :range="typeRange">
        <van-cell title="选择类型" label="想要别人监督你什么呢" value="起床" value-class="create-type"></van-cell>
      </picker>
    </van-cell-group>

    <time-picker title="生效时间"></time-picker>
    <time-picker title="失效时间"></time-picker>

    <an-more></an-more>

    <div class="more-option">
      <picker :range="createRange">
        <van-cell :border="false" title="自动创建" label="按照规定时间自动创建" value="从不" value-class="create-type"></van-cell>
      </picker>

      <check-option title="允许围观"></check-option>
      <check-option title="私密"></check-option>
    </div>
  </div>
</template>

<script>
  import TimePicker from '../../component/TimePicker.vue'
  import AnMore from './components/AnMore.vue'
  import CheckOption from '../../component/CheckOption.vue'

  export default {
    data() {
      return {
        typeRange: ['起床'],
        createRange: ['从不', '每天', '工作日', '节假日'],
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
      TimePicker,
      AnMore,
      CheckOption
    }
  }
</script>

<style lang="less" scoped>

</style>
