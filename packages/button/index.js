
import WsButton from './src/button';

/* istanbul ignore next */
WsButton.install = function(Vue) {
  Vue.component(WsButton.name, WsButton);
};

export default WsButton;
