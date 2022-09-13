<template>
  <div class="err-container">
    <div class="err-info-box">
      <div class="err-info">
        <div>404</div>
        <div>
          <div class="err-info-separate"></div>
        </div>
        <div>Not Found</div>
      </div>
      <div>
        <wr-button class="btn-404" @click="backToHome"> 返回首页 </wr-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wr-404',
  methods: {
    backToHome() {
      location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.err-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 120px 0;
  height: 100%;
  width: 100%;
}
.err-info-box {
  background-color: white;
  height: 100%;
  margin: 0 240px;
  display: flex;
  flex-direction: column;
  color: blueviolet;
  border-radius: 10px;
}
.err-info-box > div {
  margin-bottom: 48px;
  text-align: right;
}
.err-info-box > div :last-child {
  margin-bottom: 0;
}
.err-info-box .btn-404 {
  color: white;
  background-color: blueviolet;
  &:hover {
    background-color: rgb(155, 50, 254);
  }
}
.err-info {
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 200px;
  display: flex;
}
.err-info > div {
  flex: 1;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
}
.err-info-separate {
  height: 30px;
  width: 1px;
  background-color: blueviolet;
}
</style>
