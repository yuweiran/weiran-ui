
import WrTag from './src/tag';

/* istanbul ignore next */
WrTag.install = function(Vue) {
  Vue.component(WrTag.name, WrTag);
};

export default WrTag;
