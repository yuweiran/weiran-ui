
import WrVideo from './src/video';

/* istanbul ignore next */
WrVideo.install = function(Vue) {
  Vue.component(WrVideo.name, WrVideo);
};

export default WrVideo;
