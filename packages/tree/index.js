
import WsTree from './src/tree';

/* istanbul ignore next */
WsTree.install = function(Vue) {
  Vue.component(WsTree.name, WsTree);
};

export default WsTree;
