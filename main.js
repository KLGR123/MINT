import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import config from "./common/config.js"

Vue.prototype.isLogin = config.isLogin;
Vue.prototype.lg = function () {  
	isLogin = 1;
    return isLogin;  
}; 

Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
