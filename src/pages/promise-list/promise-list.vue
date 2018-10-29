<template>
  <div>
		<Item :showWatchTip="true" v-for="(list, index) in listData" :key="index" :item="list"></Item>
  </div>
</template>

<script>
	import Item from '../index/components/Item.vue';

  export default {
    data() {
      return {
				listData: []
      }
    },

    onShow() {
      this.$api.fetchAllAppoint({}).then(res => {
        console.log(res);
				this.listData = res;
      })
    },

    methods: {
			
    },

		components: {
			Item
		}
  }
</script>

<style lang="less" scoped></style>
