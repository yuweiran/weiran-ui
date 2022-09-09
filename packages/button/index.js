
import WrButton from './src/button';

/* istanbul ignore next */
WrButton.install = function(Vue) {
  Vue.component(WrButton.name, WrButton);
};

export default WrButton;
