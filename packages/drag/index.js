
import WsDrag from './src/drag';

/* istanbul ignore next */
WsDrag.install = function(Vue) {
  Vue.component(WsDrag.name, WsDrag);
};

export default WsDrag;
