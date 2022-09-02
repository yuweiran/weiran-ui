
import WsInput from './src/input';

/* istanbul ignore next */
WsInput.install = function(Vue) {
  Vue.component(WsInput.name, WsInput);
};

export default WsInput;
