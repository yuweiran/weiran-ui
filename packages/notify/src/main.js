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
const NoticeFunc =  function(options){
  let positionField =''
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
  positionField = options.position.indexOf('top')!==-1?'top':'bottom'
  
  NoticeList[options.position].forEach((item,index)=>{
    item.$el.style[positionField] = (item.$el.offsetHeight+10)*index+20+'px'
  })
  // let timer = setTimeout(() => {
  //   NoticeFunc.close(instance.noticePosition,instance.noticeId)
  // }, 4000);
}

//关闭
NoticeFunc.close = function(position,ind){
  const targetIndex =  NoticeList[position].findIndex(item=>{
   return item.noticeId === ind
  })
  document.body.removeChild(NoticeList[position][targetIndex].$el)
  NoticeList[position].splice(targetIndex,1)
  let positionField = position.indexOf('top')!==-1?'top':'bottom'
  NoticeList[position].forEach((item,index)=>{
    item.$el.style[positionField] = (item.$el.offsetHeight+10)*index+20+'px'
  })
}
export default NoticeFunc