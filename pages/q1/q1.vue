<template>	
	<view>
		<view class="imgWrap">
			<image style="width: 160upx;height: 120upx;" src="../../static/logo.png" mode=""></image>
		</view>
		<view class='a'>问题一</view>
		<view class="mission">{{question}}</view>
		<view class="b">
				<u-checkbox-group :wrap="true" :size="42" @change="checkboxGroupChange">
					<u-checkbox  @change="checkboxGroupChange"
						active-color="black" class="c"
						v-model="item.checked" 
						v-for="(item, index) in aa" :key="index" 
						:name="item.name"
					>{{item.name}}</u-checkbox>
				</u-checkbox-group>
		</view>
		<u-button type="default" class='go' @click="submit()">继续</u-button>
	</view>
</template>

<script>
	//<u-button @click="checkedAll">全选</u-button>
	export default {
		data() {
			/* onLoad:function(){
			}, */
			return {
				aa:getApp().globalData.a,
				question:getApp().globalData.q,
				res:[]
			}
		},
		methods: {
			/* checkboxChange(e) {
				console.log(e);
			}, */
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				console.log(e);
				this.res = [] //clear it every time
				for (var i = 0;i < getApp().globalData.a.length;i++)
				{
					for(var j = 0;j < e.length;j++){
						if(getApp().globalData.a[i]["name"] == e[j]){
							this.res.push(getApp().globalData.sc[i])
						}
					}
				}
				this.res = this.res.join().split(','); //flatten the list
				console.log('the score res is:')
				console.log(this.res)
			},
			// 全选
			/* checkedAll() {
				this.list.map(val => {
					val.checked = true;
				})
			} */
			updateChara(){
				const db = uniCloud.database()
				
				const charaMatrix = new Array(30).fill(0)
				for (var i = 0;i < this.res.length;i++)
				{
					var m = this.res[i];
					const ml =  //可添加补充算法 （0，1）加权平均 收敛
					charaMatrix[m] = 1;
				}
				
				const r = db.collection('contacts').where({
				    'name': getApp().globalData.registerName //此处是否有bug？
				}).update({
				    'character': charaMatrix
				})
				
				db.collection('que').where({
					type: 1 //长问题
				}).get().then((res)=>{
					console.log(res.result.data)
					if(res.result.data == ''){
						return;
						console.log('返回问题为空')
					}else{
						console.log('成功返回问题')
						//获取问题内容 1表示q数据库中第二个问题
						getApp().globalData.q = res.result.data[1]['que']
						getApp().globalData.a = res.result.data[1]['ans']
						getApp().globalData.sc = res.result.data[1]['score']
						console.log(getApp().globalData.q) //更新每次的q a sc 相当于三个暂存地址
						console.log(getApp().globalData.a)
						console.log(getApp().globalData.sc)
					}
				}).catch((err)=>{
					console.log(err.code); // 打印错误码
					console.log(err.message); // 打印错误内容
				})
			},
			submit(){
				this.updateChara();
				uni.navigateTo({
					url: '/pages/q2/q2'
				});
			}
		}
	}
</script>

<style>
.mission{
	text-align: center;
	letter-spacing: 4upx;
	margin-top: 150upx;
	color: #2c2c2c;
	font-size: 36upx;
	padding: 120;
	margin: 50upx;
	margin-bottom: 140upx;
}
.imgWrap{
	text-align: center;
	margin-top: 50upx;
	padding: 128upx;
}
.a{
	text-align: center;
	letter-spacing: 4upx;
	font-size: 100upx;
	font-weight: 600;
	margin-bottom: 80upx;
}
.b{
	margin-top: 50upx;
}
.c{
	margin-left: 70upx;
	font-size: 60upx;
}
.go{
	font-size: 50upx;
	font-weight: 600;
	width: 256upx;
	height: 128upx;
	margin-top: 70upx;
	letter-spacing: 5upx;
	&::before{
		color: #000000;
	}
}
</style>
