
import WrTree from './src/tree';
WrTree.install = function(Vue) {
  Vue.component(WrTree.name, WrTree);
};

export default WrTree;
