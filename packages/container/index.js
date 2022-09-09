
import WrContainer from './src/container';

/* istanbul ignore next */
WrContainer.install = function(Vue) {
  Vue.component(WrContainer.name, WrContainer);
};

export default WrContainer;
