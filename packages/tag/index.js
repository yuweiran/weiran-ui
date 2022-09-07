
import WsTag from './src/tag';

/* istanbul ignore next */
WsTag.install = function(Vue) {
  Vue.component(WsTag.name, WsTag);
};

export default WsTag;
