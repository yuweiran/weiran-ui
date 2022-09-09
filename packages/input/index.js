
import WrInput from './src/input';

/* istanbul ignore next */
WrInput.install = function(Vue) {
  Vue.component(WrInput.name, WrInput);
};

export default WrInput;
