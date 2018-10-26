<template>
  <div>
    PromiseList
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    mounted() {
      this.$api.fetchAllAppoint().then(res => {
        console.log(res);
      })
    },

    methods: {

    }
  }
</script>

<style lang="less" scoped></style>
