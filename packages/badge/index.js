
import WrBadge from './src/badge';

/* istanbul ignore next */
WrBadge.install = function(Vue) {
  Vue.component(WrBadge.name, WrBadge);
};

export default WrBadge;
