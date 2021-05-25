<template>
	<view>
		<view class="avatar">
			<u-avatar :src=src size="120" mode="square"></u-avatar>
		</view>
		<view class="register"> </view>
		<view class="register">欢迎你</view>
		<view class="register">光临自己</view>
		<u-button type="default" class='go' @click="submit">进入</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:"../../static/logo.png"
			}
		},
		methods: {
			submit(){
				uni.switchTab({
				    url: '/pages/home/home'
				});
			}
		}
	}
</script>

<style>
	.avatar{
		size: large;
		text-align: center;
		margin-top: 150upx;
		margin-bottom: 30upx;
	}
	.register{
		text-align: center;
		color: #000000;
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 4upx;
		margin-bottom: 20upx;
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
