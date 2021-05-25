<template>
	<view>
		<view class="avatar">
			<u-avatar :src=src size="120" mode="square" @click="tomy"></u-avatar>
		</view>
		<view class="register">FUNC</view>
		<view class="u-m-t-20 b">
			<u-cell-group>
				<u-cell-item class='a' style="#000000" title="我的MINT事迹" @click="his()"></u-cell-item>
				<u-cell-item style="#000000" title="分享我的MINT" @click="his()"></u-cell-item>
				<u-cell-item style="#000000" title="相似MINTER推荐" @click="his()"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20 b">
			<u-cell-group>
				<u-cell-item class='a' color="#000000"  title="定时器TIMER"></u-cell-item>
				<u-cell-item color="#000000"  title="小笔记NOTER"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20 b">
			<u-cell-group>
				<u-cell-item class='a' color="#000000" title="反馈" @click="logout()"></u-cell-item>
				<u-cell-item color="#000000" title="加入我们" @click="logout()"></u-cell-item>
				<u-cell-item color="#000000" title="登出" @click="logout()"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'../../static/logo.png',
				src:'../../static/logo.png',
				show:true
			}
		},
		onLoad() {
			
		},
		methods: {
			logout(){
				uni.navigateTo({
					url: '/pages/in/in'
				});
			},
			his(){
				uni.navigateTo({
					url: '/pages/history/history'
				});
			},
			tomy(){
				uni.navigateTo({
					url: '/pages/info/info'
				});
			}
		}
	}
</script>

<style lang="scss">
	// <u-navbar :is-back="false" title="　" :border-bottom="false">
	// 	<view class="u-flex u-row-right" style="width: 100%;">
	// 		<view class="camera u-flex u-row-center">
	// 			<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
	// 		</view>
	// 	</view>
	// </u-navbar> 
	
	/* <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
		<view class="u-m-r-10">
			<u-avatar :src="pic" size="140"></u-avatar>
		</view>
		<view class="u-flex-1">
			<view class="u-font-18 u-p-b-20">uView ui</view>
			<view class="u-font-14 u-tips-color">微信号:helang_uView</view>
		</view>
		<view class="u-m-l-10 u-p-10">
			<u-icon name="scan" color="#000000" size="28"></u-icon>
		</view>
		<view class="u-m-l-10 u-p-10">
			<u-icon name="arrow-right" color="#000000" size="28"></u-icon>
		</view>
	</view> */
page{
	background-color: #ffffff;
}
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
}
.a{
	margin-top: 50upx; 
	color: "#000000";
}
.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ffffff;
	}
}
.user-box{
	background-color: #fff;
}
.b{
	letter-spacing: 4upx;
}
</style>

