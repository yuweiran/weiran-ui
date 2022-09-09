
import WrTree from './src/tree';

/* istanbul ignore next */
WrTree.install = function(Vue) {
  Vue.component(WrTree.name, WrTree);
};

export default WrTree;
