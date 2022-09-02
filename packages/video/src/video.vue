<template>
  <div>
    <video class="wr-video video-js" data-setup="{}" controls>
      <source
        v-for="video in videoData"
        :key="video.id"
        :src="video.src"
        :type="video.type"
      />
      {{ alt }}
    </video>
  </div>
</template>

<script>
export default {
  name: 'wrVideo',
  props: {
    data: {
      type: Array,
    },
    alt: String,
    props: {
      type: Object,
      default() {
        return {
          src: 'src',
          type: 'type',
        }
      },
    },
  },
  computed: {
    videoData() {
      const target = this.data.map((item, index) => {
        return {
          id: index,
          src: item[this.props['src']],
          type: item[this.props['type']],
        }
      })
      return target
    },
  },
}
</script>

<style lang="scss" scoped>
.wr-video {
  width: 100%;
  height: auto;
}
</style>
