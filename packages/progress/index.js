
import WrProgress from './src/progress';
WrProgress.install = function(Vue) {
  Vue.component(WrProgress.name, WrProgress);
};

export default WrProgress;
