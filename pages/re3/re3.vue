<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="a">一个只有</view>
		<view class="personal">你自己知道的</view>
		<text class="question">问题和答案</text>
		<u-input class='input' v-model="que" :type="type" :border="border" :placeholder="placeholder1" :height="height"/>
		<u-input class='input' v-model="ans" :type="type" :border="border" :placeholder="placeholder2" :height="height"/>
		<u-button type="default" class='submit' @click="submit">继续</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				que: '',
				ans: '',
				type: 'text',
				border: true,
				placeholder1: '你的专属问题',
				placeholder2: '记住你的答案',
				height:100,
			}
		},
		methods: {
			submit(){
				if(this.que == '' || this.ans == ''){
					this.$refs.uTips.show({
						title: '好的问题和答案是你的一部分',
						type: 'info',
						duration: '2300'
					});
					return;
				}else{
					uni.navigateTo({
					    url: '/pages/re4/re4'
					});
				}
				getApp().globalData.que = this.que
				getApp().globalData.ans = this.ans
				console.log('global data changed:que and ans')
			},
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
		padding: 64upx;
	}
	.question{
		text-align: center;
		color: #000000;
		font-size: 64upx;
		font-weight: 500;
		letter-spacing: 4upx;
		margin-bottom: 64upx;
	}
	.a{
		text-align: center;
		color: #000000;
		font-size: 64upx;
		font-weight: 500;
		letter-spacing: 4upx;
		margin-bottom: 40upx;
	}
	.personal{
		text-align: center;
		color: #000000;
		font-size: 64upx;
		font-weight: 500;
		letter-spacing: 4upx;
		margin-bottom: 40upx;
	}
	.submit{
		font-size: 50upx;
		font-weight: 600;
		width: 300upx;
		height: 128upx;
		margin-top: 140upx;
		letter-spacing: 4upx;
		&::before{
			color: #000000;
		}
		
	}
</style>
