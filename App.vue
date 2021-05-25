<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
<script>
	//import config from "./common/config.js"
	export default {
		globalData: {  
			registerName: 'NULL',
			que:'NULL',
			ans:'NULL',
			gender:'NULL',
			loginName:'NULL',
			que2:"NULL",
			ans2:"NULL",
			q:"NULL",//用来存储问题
			a:[],
			sc:[]
		},
		onLaunch: function() {
			console.log('App Launch')
			console.log('this.isLogin:')
			console.log(this.isLogin);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad:function() {
			console.log(this.isLogin);
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @font-face {
	    font-family: 'font01';
		font-display: swap;
		src: url('~@/static/fonts/font01.eot');
	    src: url('~@/static/fonts/font01.eot?#iefix') format('embedded-opentype'),
		url('~@/static/fonts/font01.woff') format('woff'),
		url('~@/static/fonts/font01.ttf') format('truetype'),
		url('~@/static/fonts/font01.svg#font01') format('svg'),
		
	}
	.font01{
		font-family: "font01" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing:antialiased;
		-moz-osx-font-smoothing:grayscale;
	} */
</style>
