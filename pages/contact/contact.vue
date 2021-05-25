<template>
	<view>
		<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="contacts">
			<view v-if="error">error message: {{error.message}}</view>
			<view v-else>
				<uni-list>
					<uni-list-item v-for="item in data" @click.native="updateFn(item)" @longpress.native="rmItem(item._id)" :key="item._id" :title="item.name" :note="item.phone" link></uni-list-item>
				</uni-list>
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			rmItem(id){
				this.$refs.udb.remove(id)
			},
			updateFn(item){
				uni.navigateTo({
					url:'../update/update?item='+JSON.stringify(item),
					success:res => {},
					fail:() => {},
					complete:() => {}
				});
			}
		}
	}
</script>

<style>

</style>
