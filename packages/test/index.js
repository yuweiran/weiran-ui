
import WsTest from './src/test';

/* istanbul ignore next */
WsTest.install = function(Vue) {
  Vue.component(WsTest.name, WsTest);
};

export default WsTest;
