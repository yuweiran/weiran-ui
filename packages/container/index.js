
import WsContainer from './src/container';

/* istanbul ignore next */
WsContainer.install = function(Vue) {
  Vue.component(WsContainer.name, WsContainer);
};

export default WsContainer;
