<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<text class="register">MINT</text>
		<text class="register2">=</text>
		<text class="register">MINI TASK</text>
		<u-button type="default" class='go' @click="submit()">继续</u-button>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				
			}
		},
		methods: {
			submit(){
				const db = uniCloud.database()
				db.collection('que').where({
					type: 1 //长问题
				}).get().then((res)=>{
					console.log(res.result.data)
					if(res.result.data == ''){
						return;
						console.log('返回问题为空')
					}else{
						console.log('成功返回问题')
						//获取问题内容 0表示q数据库中第一个问题
						getApp().globalData.q = res.result.data[0]['que']
						getApp().globalData.a = res.result.data[0]['ans']
						getApp().globalData.sc = res.result.data[0]['score']
						console.log(getApp().globalData.q)
						console.log(getApp().globalData.a)
						console.log(getApp().globalData.sc)
						uni.navigateTo({
							url: '/pages/q1/q1'
						});
						
					}
				}).catch((err)=>{
					console.log(err.code); // 打印错误码
					console.log(err.message); // 打印错误内容
				})
			}
		}
	}
</script>

<style>
	.re1{
		text-align: center;
	}
	.imgWrap{
		margin-top: 128upx;
		padding: 128upx;
	}
	.register{
		text-align: center;
		color: #000000;
		font-size: 120upx;
		font-weight: 600;
		letter-spacing: 5upx;
		margin-top: 30upx;
	}
	.register2{
		text-align: center;
		color: #000000;
		font-size: 120upx;
		font-weight: 600;
		letter-spacing: 5upx;
		margin-top: 20upx;
	}
	.go{
		font-size: 50upx;
		font-weight: 600;
		width: 256upx;
		height: 128upx;
		margin-top: 250upx;
		letter-spacing: 5upx;
		&::before{
			color: #000000;
		}
		
	}
</style>
