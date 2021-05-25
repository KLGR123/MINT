<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
		<text class="nickname">起个名</text>
		<u-input class='input' v-model="value" :type="type" :border="border" :placeholder="placeholder" :height="height"/>
		<u-button type="default" class='submit' @click="submit">继续</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true,
				placeholder: '请输入',
				height:100
			}
		},
		methods: {
			submit(){
				const db = uniCloud.database()
				db.collection('contacts').where({
					name: this.value //传统MongoDB写法，不是jql写法。实际开发中推荐使用jql写法
				}).get().then((res)=>{
					console.log(res.result.data)
					if(res.result.data == ''){
						if(this.value == ''){
							//this.$u.toast('昵称不能为空');
							this.$refs.uTips.show({
								title: '你需要一个好名字',
								type: 'info',
								duration: '2300'
							});
							return;
						}else{
							uni.navigateTo({
								url: '/pages/re3/re3'
							});
						}	
					}else{
						this.$refs.uTips.show({
							title: 'id被别人抢注了，说不定你们有相似之处',
							type: 'info',
							duration: '2300'
						});
					}
				}).catch((err)=>{
					console.log(err.code); // 打印错误码
					console.log(err.message); // 打印错误内容
				})
	
				
				
				getApp().globalData.registerName = this.value
				console.log('global data changed:register name')
			}
		}
	}
</script>

<style>
	.re1{
		text-align: center;
	}
	.input{
		margin-top: 64upx;
		margin-left: 64upx;
		margin-right: 64upx;
	}
	.imgWrap{
		margin-top: 64upx;
		padding: 128upx;
	}
	.nickname{
		text-align: center;
		color: #000000;
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 4upx;
		margin-bottom: 64upx;
	}
	.submit{
		font-size: 50upx;
		font-weight: 600;
		width: 300upx;
		height: 128upx;
		margin-top: 320upx;
		letter-spacing: 4upx;
		&::before{
			color: #000000;
		}
		
	}
</style>
