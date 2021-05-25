<template>
	<view class='re1'>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<u-top-tips ref="uTips"></u-top-tips>
		<text class="nickname">已登录，这很好</text>
		<text class="nickname2">先问你个问题</text>
		<u-input class='input' v-model="value" :type="type" :border="border" :placeholder='placeholder' :height="height" @click="show = true" />
		<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
		
		<u-button type="default" class='submit' @click="submit">继续</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				border: true,
				placeholder: '请选择',
				height:100,
				show: false,
				item:{
					"name":"",
					"que":"",
					"ans":"",
					"gender":""
				},
				actionSheetList: [
				{
					text: '男'
				},
				{
					text: '女'
				},
				{
					text: '保密'
				}
			],
			}
		},
		methods: {
			submit(){
				if(this.value == ''){
					this.$refs.uTips.show({
						title: '慢慢来',
						type: 'info',
						duration: '2300'
					});
				}else{
					getApp().globalData.gender = this.value
					console.log('global data changed:gender')
					
					this.item.name = getApp().globalData.registerName
					this.item.que = getApp().globalData.que
					this.item.ans = getApp().globalData.ans
					this.item.gender = getApp().globalData.gender
					
					console.log(getApp().globalData.registerName)
					console.log(getApp().globalData.que)
					console.log(getApp().globalData.ans)
					console.log(getApp().globalData.gender)
					
					const db = uniCloud.database()
					db.collection('contacts').add(this.item).then(
						getApp().globalData.islogin = 1 //注册成功默认进入登录状态
					);
					uni.navigateTo({
					    url: '/pages/re5/re5'
					});
				}			
			},
			actionSheetCallback(index) {
				this.value = this.actionSheetList[index].text;
			}
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
		padding: 128upx;
	}
	.nickname{
		text-align: center;
		color: #000000;
		font-size: 128upx;
		font-weight: 600;
		letter-spacing: 4upx;
		margin-bottom: 64upx;
	}
	.submit{
		font-size: 50upx;
		font-weight: 600;
		width: 300upx;
		height: 128upx;
		margin-top: 320upx;
		letter-spacing: 4upx;
		&::before{
			color: #000000;
		}
		
	}
</style>

