## icon

<div class="wr-icon-container">
  <div class="wr-icon-item--show" v-for="icon in $icons" :key="icon">
    <div :class="['wr-icon-item',icon]"></div>
    <div class="wr-icon-text">{{icon}}</div>
  </div>
</div>