
import WsGrid from './src/grid';

/* istanbul ignore next */
WsGrid.install = function(Vue) {
  Vue.component(WsGrid.name, WsGrid);
};

export default WsGrid;
