
import WsBadge from './src/badge';

/* istanbul ignore next */
WsBadge.install = function(Vue) {
  Vue.component(WsBadge.name, WsBadge);
};

export default WsBadge;
