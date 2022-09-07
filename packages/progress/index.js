
import WsProgress from './src/progress';

/* istanbul ignore next */
WsProgress.install = function(Vue) {
  Vue.component(WsProgress.name, WsProgress);
};

export default WsProgress;
