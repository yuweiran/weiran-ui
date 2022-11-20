
import WrDrag from '../drag-item/src/drag';

/* istanbul ignore next */
WrDrag.install = function(Vue) {
  Vue.component(WrDrag.name, WrDrag);
};

export default WrDrag;
