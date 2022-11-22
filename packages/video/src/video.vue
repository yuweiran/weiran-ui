<template>
  <div ref="videoPlayer" class="wr-video" @mouseover="showMask = true" @mouseleave="showMask = false">
    <video ref="weiranVideo" @abort="handleAbort" @canplay="handleCanplay" @canplaythrough="handleCanplayThrough"
      @durationchange="handleDurationchange" @emptied="handleEmptied" @ended="handleEnded" @error="handleError"
      @loadeddata="handleLoadedData" @loadedmetadata="handleLoadedMetaData" @loadstart="handleLoadedStart"
      @pause="handlePause" @play="handlePlay" @playing="handlePlaying" @progress="handleProgress"
      @ratechange="handleRatechange" @seeked="handleSeeked" @seeking="handleSeeking" @stalled="handleStalled"
      @suspend="handleSuspend" @timeupdate="handleTimeupdate" @volumechange="handleVolumechange"
      @waiting="handleWaiting" class="wr-video_inner">
      <source v-for="video in sourcesList" :key="video.src" :src="video.src" :type="video.type" />
    </video>
    <div v-show="showMask" class="wr-video-mask">
      <div class="wr-video-mask-header">
        <div>
          <slot name="header-left"></slot>
        </div>
        <div>
          <slot name="header-right"></slot>
        </div>
      </div>
      <div class="wr-video-mask-body">
        <div @click="handleChangeVideoState"></div>
        <div @touchstart="handleTouchStart" @click="handleChangeVideoState"></div>
      </div>
      <div class="wr-video-mask-footer">
        <div class="wr-video-mask-footer-left">
          <slot>
            <i v-show="!isPlaying" @click="handleChangeVideoState" class="video-operate-item wr-icon-pausing"></i>
            <i v-show="isPlaying" @click="handleChangeVideoState" class="video-operate-item wr-icon-playing"></i>
            <!-- <i class="video-operate-item wr-icon-pre"></i>
            <i class="video-operate-item wr-icon-next"></i> -->
            <span class="video-operate-item">{{ currentTime }}</span>
          </slot>
        </div>
        <div class="wr-video-mask-footer-progress">
          <Slider :height="4" :hiddenControllerToolTip="true" :auto-change="false" :format-tooltip='getVideoTime'
            v-model='currentVideoSeconds' @change="handleChangeProcess" :total="totalVideoSeconds"></Slider>
        </div>
        <div class="wr-video-mask-footer-right">
          <span class="video-operate-item">{{ totalTime }}</span>

          <wr-dropdown placement="top">
            <span class="video-operate-item">倍速</span>
            <wr-dropdown-menu slot="dropdown">
              <wr-dropdown-item @click="handleSetRate(rate.value)" v-for="rate in playbackRates" :key="rate.id">
                {{ rate.name }}
              </wr-dropdown-item>
            </wr-dropdown-menu>
          </wr-dropdown>
          <wr-dropdown placement="top" :auto-hidden="false">
            <span class="video-operate-item">声音</span>
            <wr-dropdown-menu slot="dropdown">
              <div style="width: 120px;padding: 0 10px;">
                <Slider v-model="currentVolume"></Slider>
              </div>
            </wr-dropdown-menu>
          </wr-dropdown>
          <!-- <span class="video-operate-item">设置</span> -->
          <i v-show="!isFullScreen" @click="handleSetVideoFullScreen"
            class="video-operate-item wr-icon-full-screen"></i>
          <i v-show="isFullScreen" @click="handleSetVideoFullScreen" class="video-operate-item wr-icon-mini-screen"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fullscreen from "../../../src/utils/fullscreen"
import Slider from "../../slider/src/slider.vue"
import WrDropdown from "../../dropdown/src/dropdown.vue"
import WrDropdownMenu from "../../dropdown/src/dropdown-menu.vue"
import WrDropdownItem from "../../dropdown/src/dropdown-item.vue"
export default {
  name: "wrVideo",
  mixins: [Fullscreen],
  components: {
    Slider, WrDropdown, WrDropdownMenu, WrDropdownItem
  },
  props: {
    sources: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      showMask: false,
      isPlaying: false,
      player: null,
      totalVideoSeconds: 1,
      playbackRates: [
        { id: 0, value: 0.75, name: '×0.75' },
        { id: 1, value: 1, name: '×1' },
        { id: 2, value: 1.5, name: '×1.5' },
        { id: 3, value: 2, name: '×2' },
        { id: 4, value: 3, name: '×3' },
      ],
      currentVolume: 100,
      totalTime: '0:0:0',
      isFullScreen: false,
      currentVideoSeconds: 0,
      supportedTypes: ["mp4", "webm", "ogg"],
    };
  },
  computed: {
    sourcesList() {
      let target = this.sources.map((source) => {
        let splitArr = source.split(".");
        let len = source.split(".").length;
        let type = splitArr[len - 1].toLowerCase();
        if (this.supportedTypes.indexOf(type) !== -1) {
          return { src: source, type: `video/${splitArr[len - 1]}` };
        }
      });
      return target;
    },
    currentTime() {
      let time = this.getVideoTime(this.currentVideoSeconds)
      return time
    }
  },
  methods: {
    handleSetRate(rate) {
      if (this.$refs.weiranVideo) {
        this.$refs.weiranVideo.playbackRate = rate;
      }
    },
    handleChangeVideoState() {
      let state = !this.isPlaying
      let player = this.$refs.weiranVideo
      this.isPlaying = state
      if (state) {
        player.play()
      } else {
        player.pause()
      }
    },
    handleSetVideoFullScreen() {
      if (this.isFullScreen) {
        this.exitFullscreen()
        this.isFullScreen = false
        return
      }
      this.launchFullscreen(this.$refs.videoPlayer)
      this.isFullScreen = true
    },
    handleChangeProcess(val) {
      this.$refs.weiranVideo.currentTime = val
    },
    handleTouchStart() {
      console.log('handleTouchStart')
    },
    handleAbort() {
      console.log("暂停，至今不知道什么时候出发");
    },
    handleCanplayThrough() {
      console.log("不是在缓存停顿情况下进行播放CanplayThrough");
    },
    //这是会自动触发的勾子，可以播放视频时触发
    handleCanplay() {
      let player = this.$refs.weiranVideo
      this.totalVideoSeconds = player.duration
      this.totalTime = this.getVideoTime(player.duration)
      if (this.isPlaying) {
        player.play()
      } else {
        player.pause()
      }
    },
    handleDurationchange() {
      console.log(
        "？视频时长改变。。什么时候会触发这种情况？视频信息开始加载完？"
      );
    },
    handleEmptied() {
      console.log("播放列表为空时触发");
    },
    handleEnded() {
      this.isPlaying = false
    },
    handleError() {
      this.isPlaying = false

    },
    handleLoadedData() {
      console.log("已加载当前帧handleLoadedData");
    },
    handleLoadedMetaData() {
      console.log("已加载元数据handleLoadedMetaData");
    },
    loadstart() {
      console.log("loadstart");
    },
    handleLoadedStart() {
      console.log("handleLoadedStart");
    },
    handlePause() {
      console.log("handlePause暂停");
    },
    handlePlay() {
      console.log("handlePlay播放");
    },
    handlePlaying() {
      console.log("因缓冲而暂停或停止后已就绪时handlePlaying");
    },
    handleProgress() {
      console.log("handleProgress");
    },
    handleRatechange() {
      console.log("handleRatechange");
    },
    handleSeeked() {
      console.log("handleSeeked,单击新的视频位置后");
    },
    handleSeeking() {
      console.log("handleSeeking开始移动视频位置时");
    },
    handleStalled() {
      console.log("handleStalled浏览器开始获取媒体数据");
    },
    handleSuspend() {
      console.log("handleSuspend浏览器刻意获取媒体数据");
    },
    handleTimeupdate() {
      this.currentVideoSeconds = this.$refs.weiranVideo.currentTime
    },
    handleVolumechange() {
      console.log("handleVolumechange音量修改时");
    },
    handleWaiting() {
      console.log("handleWaiting需要缓冲而停止时");
    },
    getVideoTime(seconds) {
      let getString = function (num) {
        let str = num + ''
        if (str.length === 2) {
          return str
        }
        return '0' + str
      }
      let minutes = getString(parseInt(seconds % 3600 / 60))
      let secondsRest = getString(parseInt(seconds % 3600 % 60))
      return [minutes, secondsRest].join(':')
    },
    //事件监听
    handleScreenEvent() {
      if (document.fullscreenElement) {
        this.isFullScreen = true
      } else {
        this.isFullScreen = false
      }
    },
  },
  created() { },
  mounted() {
    let videoPlayer = this.$refs.weiranVideo;
    // setInterval(() => {
    //   let buffer = videoPlayer.buffered;
    //   let start = videoPlayer.buffered.start(0);
    //   let end = videoPlayer.buffered.end(0);
    //   console.log(buffer, start, end);
    // }, 1000);
    setTimeout(() => {
      console.log(videoPlayer.buffered); //视频
      console.log(videoPlayer.currentSrc); //播放源地址
      console.log(videoPlayer.duration); //视频长度
      console.log(videoPlayer.seeking); //
      console.dir(videoPlayer.volume)
    }, 1000);
    // videoPlayer.currentTime = 66; //设置视频当前时间、位置
    // videoPlayer.playbackRate = 1.25; //设置视频播放速度
    // videoPlayer.volume = 0.8; //音量大小，0-1
    document.addEventListener("fullscreenchange", this.handleScreenEvent)
  },
  watch: {
    currentVolume(val) {
      this.$refs.weiranVideo.volume = val / 100
    }
  },
  beforeDestroy() {
    document.removeEventListener('fullscreenchange', this.handleScreenEvent)
  }
};
</script>
