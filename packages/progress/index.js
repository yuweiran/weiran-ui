
import WrProgress from './src/progress';

/* istanbul ignore next */
WrProgress.install = function(Vue) {
  Vue.component(WrProgress.name, WrProgress);
};

export default WrProgress;
