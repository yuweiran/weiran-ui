import Vue from 'vue'
// import entry from './app';
import VueRouter from 'vue-router';
//将组件库所有组件注册到文档项目
import Element from '../src/index.js';
import hljs from 'highlight.js';
import routes from './routers/routes';
import demoBlock from './components/wrui-demo-block';

import "animate.css"
import 'highlight.js/styles/rainbow.css'; // 代码高亮的css
import 'video.js'
import'video.js/dist/video-js.min.css';
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Element);
Vue.component('wrui-demo-block',demoBlock)
Vue.config.productionTip = false

console.log(routes)
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(
  // route
   ()=> {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  // const data = title[route.meta.lang];
  // for (let val in data) {
  //   if (new RegExp('^' + val, 'g').test(route.name)) {
  //     document.title = data[val];
  //     return;
  //   }
  // }
  // document.title = 'Element';
  // ga('send', 'event', 'PageView', route.name);
});

 const originalReplace = VueRouter.prototype.replace;
 
VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err);
};
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

