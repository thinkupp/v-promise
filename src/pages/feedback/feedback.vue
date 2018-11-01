<template>
	<div>
		feedback
		<div class="input-wrapper">
			<textarea class="input" placeholder="请输入您的意见或建议" v-model="value" :maxlength="maxlength"></textarea>
		</div>

		<button class="button"  @click="submit">提交</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				maxlength: 500,
				value: ''
			}
		},

		methods: {
			submit () {
				this.$api.feedback(this.value).then(res => {
					console.log(res);
					wx.showModal({
						title: '提示',
						content: '反馈成功，感谢您的意见！',
						showCancel: false,
						success( e ) {
							if (e.confirm) {
								wx.navigateBack()
							}
						}
					})
				})	
			}
		}
	}
</script>

<style lang="less" scoped>
	.input-wrapper {
		padding: 20rpx;
		box-sizing: border-box;
		position: relative;
	}

	.input {
		width: 100%;
		height: 300rpx;
		border: 1rpx solid #CCC;
		border-radius: 10rpx;
		padding: 10rpx;
		box-sizing: border-box;
	}

	.button {
		position: absolute;
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		left: 0;
		bottom: 0;
		font-size: 30rpx;
	}
</style>
