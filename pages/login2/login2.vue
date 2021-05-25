<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="a">你还记得</view>
		<view class="personal">你的专属问题</view>
		<text class="question">的答案吗</text>
		<view class="personal2">{{q}}</view>
		<u-input class='input' v-model="ans" :type="type" :border="border" :placeholder="placeholder2" :height="height"/>
		<u-button type="default" class='submit' @click="submit">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				q:getApp().globalData.que2,
				ans: '',
				type: 'text',
				border: true,
				placeholder2: '输入你的答案',
				height:100,
			}
		},
		methods: {
			submit(){
				if(this.ans != getApp().globalData.ans2){
					this.$refs.uTips.show({
						title: '再想想，这不是正确答案',
						type: 'info',
						duration: '2300'
					});
					return;
				}else{
					console.log('has login!')
					uni.navigateTo({
					    url: '/pages/welcome/welcome'
					});
				}
				//getApp().globalData.que = this.que
				//getApp().globalData.ans = this.ans
				//console.log('global data changed:que and ans')
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
	.personal2{
		text-align: center;
		color: #000000;
		font-size: 32upx;
		font-weight: 500;
		letter-spacing: 3upx;
		margin-top: 40upx;
		margin-bottom: 50upx;
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
