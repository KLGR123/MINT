<template>
	<view class="loginWrap">
		<view class="imgWrap">
			<image  class="logo" style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		
		<u-form class="loginForm" v-if="loginWay == '短信验证登录'"  @submit="formSubmit">
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入登录账号" v-model="value" type="number" clearable />
			</view>
			<view class="uni-form-item uni-column">
				<u-input v-model="value" type="password"  password-icon="true" />
				<text class="forgetText">忘记密码</text>
			</view>
			<button form-type="submit" class="loginbtn" type="default">注册</button>
		</u-form>
		
		
		<u-form class="loginForm" v-if="loginWay == '账号密码登录'" :model="form" ref="uForm">
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入手机号码" type="number" v-model="form.name" />
			</view>
			<view class="uni-form-item uni-column">
				<u-input placeholder="请输入验证码" v-model="form.name" />
				<view class="wrap">
					<u-toast ref="uToast"></u-toast>
					<u-verification-code 
					:seconds="seconds" 
					@end="end" 
					@start="start" 
					ref="uCode" 
					@change="codeChange"
					></u-verification-code>
					<u-button type="success" @click="getCode">{{tips}}</u-button>
				</view>
			</view>
			<button class="loginbtn" type="default">登录</button>
		</u-form>
		
		<view>
			<text @click="changeLoginWay" style="color: #a8a5a9;">{{loginWay}}</text>
		</view>
		
		<view class="wechatLogin">
			<text>社交账号登录</text>
			<button class="wechatLoginBtn" open-type="getUserInfo"  @getuserinfo="wechatLogin" ></button>
		</view>
		
	</view>
</template>
 
<script>
	export default{
		data(){
			return{
				form:{
					name:''
				},
				value:'',
				loginWay:'短信验证登录',
				seconds:60,
				tips:''
			}
		},
		methods:{
			//登录提交
			formSubmit(){
				console.log("页面跳转")
			},
			//微信登录
			wechatLogin(){		
				let _that = this;
				uni.getSetting({
				 success(res) {
					console.log("授权：",res);
				   if (!res.authSetting['scope.userInfo']) {
						//这里调用授权
						console.log("当前未授权");
				   } else {
						//用户已经授权过了
						console.log("当前已授权");
						//#ifdef MP-WEIXIN
						uni.getProvider({
						  service: 'oauth',
						  success: function (res) {
							   console.log(res.provider)
							if (~res.provider.indexOf('weixin')) {
								uni.login({
									provider: 'weixin',
									success: (res2) => {
										
										uni.getUserInfo({
											provider: 'weixin',
											success: (info) => {//这里请求接口
												console.log("登录返回信息",res2);
												console.log("获取用户信息",info);
												
												_that.$store.commit('login',info.userInfo);
												uni.redirectTo({
												    url: '../index/index'
												});
											},
											fail: () => {
												uni.showToast({title:"微信登录授权失败",icon:"none"});
											}
										})
								
									},
									fail: () => {
										uni.showToast({title:"微信登录授权失败",icon:"none"});
									}
								})
								
							}else{
								uni.showToast({
									title: '请先安装微信或升级版本',
									icon:"none"
								});
							}
						  }
						});
						//#endif
						
						
						
				   }
				 }
			   })
				 
			},
			//点击切换登录方式
			changeLoginWay(){
				if(this.loginWay == '短信验证登录'){
					this.loginWay = '账号密码登录'
					console.log("切换到账号密码登录")
				}else if(this.loginWay == '账号密码登录'){
					this.loginWay = '短信验证登录'
					console.log("切换到短信验证登录")
				}
			},
			//
			codeChange(text) {
				// console.log("codeChange",text)
				this.tips = text;
			},
			//点击获取验证码倒计时
			getCode(){
				console.log("aa")
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				console.log("aa1111111")
				this.$u.toast('倒计时开始');
			}
			
		}
	}
</script>
 
<style lang="less">
		
	.loginWrap{
		text-align: center;
		.imgWrap{
			text-align: center;
			padding: 50upx;
		}
		.loginForm{
			padding: 30upx;
			text-align: center;
			.uni-form-item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1upx solid #DCDCDC;
				padding: 10upx 30upx;
				margin: 20upx;
				u-input{
					flex: 1;
				}
				.forgetText{
					color: #C8C7CC;
				}
				
			}
				
			.wrap{
				height: auto;
			}
			.loginbtn{margin: 20upx; margin-top: 60upx;background: #000000;color: #fff;}
		}
		.wechatLogin{
			text-align: center;
			margin-top: 60upx;
			text{
				color: #a8a5a9;
			}
			.wechatLoginBtn{
				background-image: url(../../static/img/wechat.png);
				border: none;
				width: 32px;
				height: 32px;
				margin-top: 20upx;
				&::after{
					border: none;
				}
			}
			image{
				width: 54upx;
				height: 54upx;
				margin-top: 30upx;
			}
		}
	}
</style>