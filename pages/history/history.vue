<template>
	<u-time-line>
		<view class="register">事迹时间线</view>
		<u-time-line-item nodeTop="20">
			<!-- 此处自定义了左边内容，用一个图标替代 -->
			<template v-slot:node>
				<view class="u-node" style="background: #353435;">
					<!-- 此处为uView的icon组件 -->
					<u-icon name="checkmark" color="#fff" :size="24"></u-icon>
				</view>
			</template> 
			<template v-slot:content>
				<view>
					<view class="u-order-title"></view>
					<view class="u-order-desc">返回完成的任务1</view>
					<view class="u-order-time">返回时间1</view>
				</view>
			</template>
		</u-time-line-item>
		<u-time-line-item nodeTop="20">
			<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
			<template v-slot:node>
				<view class="u-node" style="background: #353435;">
					<!-- 此处为uView的icon组件 -->
					<u-icon name="close" color="#fff" :size="24"></u-icon>
				</view>
			</template> 
			<template v-slot:content>
				<view>
					<view class="u-order-desc">返回未完成的任务2</view>
					<view class="u-order-time">返回时间2</view>
				</view>
			</template>
		</u-time-line-item>
	</u-time-line>
</template>

<style lang="scss" scoped>
	.register{
		margin-left: 40upx;
		color: #000000;
		font-size: 100upx;
		font-weight: 600;
		letter-spacing: 4upx;
		margin-bottom: 50upx;
		margin-top: 190upx;
	}
	.u-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
		margin-left: 160upx;
	}
	
	.u-order-title {
		color: #373738;
		font-weight: bold;
		font-size: 32rpx;
	}
	
	.u-order-desc {
		color: rgb(57, 58, 59);
		font-size: 55rpx;
		margin-bottom: 6rpx;
		margin-left: 100upx;
	}
	
	.u-order-time {
		color: rgb(191, 189, 193);
		font-size: 25rpx;
		margin-left: 100upx;
	}
</style>