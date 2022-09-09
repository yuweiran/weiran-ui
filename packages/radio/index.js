
import WrRadio from './src/radio';

/* istanbul ignore next */
WrRadio.install = function(Vue) {
  Vue.component(WrRadio.name, WrRadio);
};

export default WrRadio;
