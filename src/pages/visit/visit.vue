<template>
	<div class="visit">
		<Item :showWatchTip="true"  v-for="(record, index) in visitRecord" :key="index" :item="record"></Item>
</div>
</template>
<script>
	import Item from '../index/components/Item.vue';
	import { calcTime } from '../../utils/index.js';

	export default {
		data () {
			return {
				visitRecord: []				
			}
		},

		mounted () {
			this.initData();
		},

		methods: {
			initData () {
				this.$api.accessRecord().then(res => {
					res.forEach(item =>{
						item.startTime = new Date(item.startTime).getTime();
						item.lastTime = calcTime(item.lastVisitTime);
					})
					this.visitRecord = res;
				})
			}
		},

		components: {
			Item
		}
	}
</script>
<style lang="less" scoped>
	.visit {
	
	}
</style>
