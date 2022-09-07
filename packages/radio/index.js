
import WsRadio from './src/radio';

/* istanbul ignore next */
WsRadio.install = function(Vue) {
  Vue.component(WsRadio.name, WsRadio);
};

export default WsRadio;
