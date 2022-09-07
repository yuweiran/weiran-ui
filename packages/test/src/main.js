import notify from './test.vue'
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
  //定位值传入判断，过滤
  let valueValid =
      ['top-right', 'top-left', 'bottom-left', 'bottom-right'].indexOf(
        options.position
      ) !== -1
    if (!valueValid)  {
      options.position = 'top-right'
    }
  let  instance = new Notify({
    data:options,    
  });
  instance.noticeId ='notify'+ind++
  instance.noticePosition = options.position 
  instance.$mount();
  NoticeList[options.position].push(instance)
  document.body.appendChild(instance.$el)

  positionField = options.position.indexOf('top')!==-1?'top':'bottom'
  
  NoticeList[options.position].forEach((item,index)=>{
    item.$el.style[positionField] = (item.$el.offsetHeight+10)*index+20+'px'
  })
  setTimeout(() => {
    NoticeFunc.close(instance.noticePosition,instance.noticeId)
  }, 4000);
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