
import WsVideo from './src/video';

/* istanbul ignore next */
WsVideo.install = function(Vue) {
  Vue.component(WsVideo.name, WsVideo);
};

export default WsVideo;
