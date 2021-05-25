<template>
	<view>
		<view class="avatar">
			<u-avatar :src=src size="120" mode="square" @click="tomy"></u-avatar>
		</view>
		<view class="register">MINT</view>
		<view class="mission">{{mission}}</view>
		<u-button class="do" size="default" :plain="true" :ripple="true" @click="toshare()">我做到了</u-button>
		<u-card :show-head="false" class="c" :title="title" :sub-title="subTitle" :thumb="thumb" :thumb-width="80" :border="true" :padding="30" :showFoot="false" >
				<view class="" slot="body">
					<view class="u-row-between u-body-item u-flex u-p-b-0 u-col-between">
						<view class="b u-line-2 u-body-item-title ">第一推荐</view>
						<u-link color="#989da0" href="http://www.youtube.com">从数据库调回的推荐信息和url，一</u-link>
					</view>
					<view class="u-row-between u-body-item u-flex u-p-b-0 u-col-between">
						<view class="e u-line-2 u-body-item-title ">第二推荐</view>
						<u-link color="#989da0" href="http://www.facebook.com">从数据库调回的推荐信息和url，二</u-link>
					</view>
				</view>
				<view slot="foot"><u-icon name="chat-fill" size="34" color="" label="30评论"></u-icon></view> 
			</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mission:"去操场上参加一次广场舞，录视频记录",
				src:"../../static/logo.png",
				title: '#推荐给你',
				subTitle: '',
				thumb: ''
			}
		},
		methods: {
			tomy(){
				uni.navigateTo({
					url: '/pages/info/info'
				});
			},
			toshare(){
				uni.navigateTo({
					url: '/pages/re2/re2'
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
	.mission{
		text-align: center;
		letter-spacing: 4upx;
		margin-top: 150upx;
		color: #2c2c2c;
		font-size: 30upx;
		padding: 100;
		margin: 30upx;
		margin-bottom: 100upx;
	}
	.do{
		font-size: 50upx;
		font-weight: 600;
		width: 300upx;
		height: 128upx;
		margin-top: 360upx;
		letter-spacing: 4upx;
		margin-bottom: 60upx;
		color: #2c2c2c;
	}
	.register{
		text-align: center;
		color: #000000;
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 4upx;
	}
	.b{
		color: #2c2c2c;
		letter-spacing: 4upx;
		margin-bottom: 20upx;
		font-weight: 600;
	}
	.c{
		font-size:50upx;
		font-weight:400;
		letter-spacing: 4upx;
	}
	.e{
		color: #2c2c2c;
		letter-spacing: 4upx;
		margin-bottom: 20upx;
		font-weight: 600;
	}
	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}
</style>
