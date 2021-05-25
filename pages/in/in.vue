<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<text class="register">来</text>
		<u-button type="default" class='go1' @click="submit1()">登录</u-button>
		<u-button type="default" class='go2' @click="submit2()" >注册</u-button>
	</view>
</template>

<script>
	//import config from "../../common/config.js"
	export default {
		data() {
			return {
			}
		},
		methods: {
			submit1(){
				//
				if(this.isLogin == 1){
					console.log('islogin = 1')
					
					var maxNum = 3;  
				    var minNum = 0;  
				    var n = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;  
					console.log(n)
					//n = 3
					if(n==0){
						uni.navigateTo({
						    url: '/pages/ques/ques' //进入小问题页面
						});
					}
					else if(n==1){
						uni.navigateTo({
						    url: '/pages/frids/frids' //进入好友推荐页面 可先不做
						});
					}
					else if(n==2){
						//uni.navigateTo({
						//    url: '/pages/.../...' //未定
						//});
						uni.navigateTo({
						    url: '/pages/frids/frids' //进入好友推荐页面 可先不做
						});
					}
					else if(n==3){
						uni.navigateTo({
						    url: '/pages/home/home' //进入主页面
						});
					} 
				}
				if(this.isLogin == 0){
					uni.navigateTo({
					    url: '/pages/login/login'
					});
				}
				
			},
			submit2(){
				uni.navigateTo({
				    url: '/pages/re1/re1'
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
		margin-top: 64upx;
		padding: 100upx;
	}
	.register{
		text-align: center;
		color: #000000;
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 5upx;
	}
	.go1{
		font-size: 50upx;
		font-weight: 600;
		width: 500upx;
		height: 128upx;
		margin-top: 400upx;
		letter-spacing: 5upx;
		margin-bottom: 40upx;
		&::before{
			color: #000000;
		}
	}
	.go2{
		font-size: 40upx;
		font-weight: 600;
		width: 500upx;
		height: 128upx;
		margin-top: 10upx;
		letter-spacing: 5upx;
		&::before{
			color: #000000;
		}
	}
	.or{
		font-size: 30upx;
		font-weight: 600;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
</style>
