<template>
  <div>
    <van-cell-group>
      <picker :range="typeRange">
        <van-cell title="选择类型" value="起床"></van-cell>
      </picker>
      <picker :range="visibilityRange">
        <van-cell title="报名信息" value="所有人可见"></van-cell>
      </picker>
      <picker :range="timeRange">
        <van-cell title="有效时间" value="仅一次"></van-cell>
      </picker>
    </van-cell-group>
    -填表-
    <van-cell-group>
      <van-field required label="标题" placeholder="给你的约定起个独特的标题"></van-field>
      <van-field :value="desc" required label="描述" placeholder="你有什么想法或者想对访问者说些什么"></van-field>
      <van-field required label="人数限制" placeholder="设定监督人数上限"></van-field>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        typeRange: ['起床'],
        visibilityRange: ['所有人可见', '所有人不可见'],
        timeRange: ['仅一次', '每天(包含节假日)', '每天(不含节假日)'],
        showAction: false,
        desc: '有你们在一旁，我可能动力会大些！'
      }
    },

    created() {

    },

    methods: {
    }
  }
</script>

<style lang="less" scoped>
  .action {
    z-index: 99999;
  }
</style>
