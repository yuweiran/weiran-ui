import notify from './main.vue'
import Vue from 'vue'

let Notify = Vue.extend(notify)
let ind =1
let NoticeList = {
  'top-left':[],
  'top-right':[],
  'bottom-left':[],
  'bottom-right':[],
}

function refreshElPosition(position){
  let  positionField = position.indexOf('top')!==-1?'top':'bottom'
  let initValue = 0
  NoticeList[position].forEach((item,index)=>{
    initValue+=index===0?0:NoticeList[position][index-1].$el.offsetHeight+10
    item.$el.style[positionField] =initValue +20+'px'
  })
}

const NoticeFunc =  function(options){
  if(!options){
    options={}
  }
  options.visible=true
  let id='notify'+ind++
  //定位值传入判断，过滤
  let valueValid =
      ['top-right', 'top-left', 'bottom-left', 'bottom-right'].indexOf(
        options.position
      ) !== -1
    if (!valueValid)  {
      options.position = 'top-right'
    }
  
//手动删除调用方法
  options.onClose=function() {
    NoticeFunc.close(options.position , id);
    // clearTimeout(timer)
  };
  let  instance = new Notify({
    data:options,    
  });
  instance.noticeId =id
  instance.noticePosition = options.position
  //vc实例先mount再将el挂载到页面 
  instance.$mount();
  NoticeList[options.position].push(instance)
  document.body.appendChild(instance.$el)
  refreshElPosition(options.position)

}

//关闭
NoticeFunc.close = function(position,ind){
  const targetIndex =  NoticeList[position].findIndex(item=>{
   return item.noticeId === ind
  })
  NoticeList[position].splice(targetIndex,1)
  refreshElPosition(position)
}
export default NoticeFunc