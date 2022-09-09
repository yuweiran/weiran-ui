
import WrTable from './src/table';

/* istanbul ignore next */
WrTable.install = function(Vue) {
  Vue.component(WrTable.name, WrTable);
};

export default WrTable;
