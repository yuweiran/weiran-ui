<template>
  <div style="display: grid;padding:0 200px;">
    <div style="margin:0 auto;display: flex;height:640px">
      <img style="width:400px ;" src="@/assets/images/logo.svg" alt="logo" />
      <div style="width:400px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
        <h1>WR-UI</h1>
        <p>个人独立设计开发的一套基于vue2的桌面端基础组件库</p>
      </div>
    </div>
    <div class="section">
      <div style="padding:0 20px">
        <h2 style=" color: #303F5B;">项目初衷</h2>
        <div>
          <p>
            因为想做，便去做了，毕竟不是每个人都能做自己想做的事，成为自己想成为的人
          </p>
        </div>
      </div>
      <div>
        <img style="width:100%;height:100%" src="../../assets/jpg/page.jpg" alt="" srcset="">
      </div>
    </div>
    <div class="section">
      <div>
        <img style="width:100%;height:100%" src="../../assets/jpg/pic.jpg" alt="" srcset="">
      </div>
      <div style="padding:0 20px">
        <h2 style="color: #303F5B;">项目简介</h2>
        <p>
          个人独立设计开发的一套基于vue2的桌面端基础组件库，封装了按钮、布局、表格、滑块、提示框等数十个组件
        </p>
        <p>
          限于被使用次数少，反馈少，可能还存在很多问题，如果有幸被小伙伴关注到，希望能得到您宝贵的建议
        </p>
        <p>
          可能还会持续更新，随着后续个人知识与技能的积累，会对组件库进行后续升级优化
        </p>
      </div>
    </div>
    <div class="section-author">
      <h2 style="color: #303F5B;">关于我</h2>
      <div style="display: grid;place-content: center;">
        <div style="height:130px;width: 130px;overflow: hidden;border-radius: 50%;">
          <img style="height: 100%;width: 100%;" src="../../assets/jpg/headicon.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="info-container">
        <div>
          <div>name：</div>
          <div>于未然</div>
        </div>
        <div>
          <div>email：</div>
          <div>1492681276@qq.com</div>
        </div>
        <div>
          <div>tel：</div>
          <div>12345678901</div>
        </div>
        <div>
          <div>github：</div>
          <div><a href="https://github.com/yuweiran">https://github.com/yuweiran</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.section {
  border-radius: 4px;
  display: flex;
  margin: 40px 0;

  &>div {
    flex: 1;
  }

  p {
    letter-spacing: 3px;
    font-size: 14px;
    line-height: 20px;
  }
}

.section-author {
  margin: 20px 0;

  .info-container {
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    margin: 20px 0;

    &>div {
      margin: 16px 0;
      height: 22px;
      line-height: 22px;
      display: flex;

      &>div:first-child {
        width: 80px;
        text-align: right;
        font-weight: bold;
      }

      &>div:last-child {
        flex: 1;
        display: flex;
        place-content: center;
      }
    }
  }
}
</style>