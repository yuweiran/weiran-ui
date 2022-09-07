
import WsTable from './src/table';

/* istanbul ignore next */
WsTable.install = function(Vue) {
  Vue.component(WsTable.name, WsTable);
};

export default WsTable;
