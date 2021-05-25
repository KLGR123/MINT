<template>
	<view>
		<uni-easyinput v-model="item.name" placeholder="name" />
		<uni-easyinput v-model="item.phone" placeholder="phone" />
		<button type="default" @click="submit">submit</button>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{
					"_id":"",
					"name":"",
					"phone":""
				}
			}
		},
		onLoad({item}){
			this.item = JSON.parse(item)
		},
		methods: {
			submit(){
				const db = uniCloud.database();
				let item = {...this.item}
				delete item._id
				db.collection('contacts').doc(this.item._id).update(item).then(e=>{console.log(e)});
			}
		}
	}
</script>

<style>

</style>

