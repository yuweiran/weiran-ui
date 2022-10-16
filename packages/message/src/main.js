import message from './main.vue'
import Vue from 'vue'

let Message = Vue.extend(message)
let ind =1
let NoticeList = []

function refreshElPosition(){
  let initValue = 0
  NoticeList.forEach((item,index)=>{
    initValue+=index===0?0:NoticeList[index-1].$el.offsetHeight+10
    item.$el.style.top =initValue +20+'px'
  })
}

const MessageFunc =  function(options){
  if(!options){
    options={}
  }
  options.visible=true
  let id='message'+ind++
  
//手动删除调用方法
  options.onClose=function() {
    MessageFunc.close(id);
  };
  let  instance = new Message({
    data:options,    
  });
  instance.messageId =id
  //vc实例先mount再将el挂载到页面 
  instance.$mount();
  NoticeList.push(instance)
  document.body.appendChild(instance.$el)
  refreshElPosition()
}

//关闭
MessageFunc.close = function(ind){
  const targetIndex =  NoticeList.findIndex(item=>{
   return item.messageId === ind
  })
  NoticeList.splice(targetIndex,1)
  refreshElPosition()
}

MessageFunc.danger=function(options){{
  Object.assign(options,{
    type:'danger'
  })
  return MessageFunc(options)
}}
MessageFunc.warning=function(options){
  Object.assign(options,{
    type:'warning'
  })
  return MessageFunc(options)
}
MessageFunc.success=function(options){
  Object.assign(options,{
    type:'success'
  })
  return MessageFunc(options)
}
MessageFunc.default=function(options){
  Object.assign(options,{
    type:'default'
  })
  return MessageFunc(options)
}
export default MessageFunc