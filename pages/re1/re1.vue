<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<text class="register">注册</text>
		<u-button type="default" class='go' @click="submit()">开始</u-button>
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
				uni.navigateTo({
				    url: '/pages/re2/re2'
				});
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
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 5upx;
	}
	.go{
		font-size: 50upx;
		font-weight: 600;
		width: 256upx;
		height: 128upx;
		margin-top: 450upx;
		letter-spacing: 5upx;
		&::before{
			color: #000000;
		}
		
	}
</style>
