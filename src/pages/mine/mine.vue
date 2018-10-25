<template>
  <div class="mine">
    Mine
    <button @click="fetchAccessRecord">足迹</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    created() {

    },

    methods: {
      fetchAccessRecord () {
        this.$api.accessRecord([]).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style lang="less" scoped></style>
