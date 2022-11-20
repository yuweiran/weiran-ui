export default {
  methods: {
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
   launchFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
      //不同浏览器之间需要添加前缀
        element.mozRequestFullScreen();
      } else if(element.msRequestFullscreen){
        element.msRequestFullscreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
      }
    }
  },
}