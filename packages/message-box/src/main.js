import Alert from './alert.vue'
import Confirm from './confirm.vue'
import Prompt from './prompt.vue'
import Vue from 'vue'

let ConfirmConstructor = Vue.extend(Confirm)
let AlertConstructor = Vue.extend(Alert)
let PromptConstructor = Vue.extend(Prompt)


//confirm方法
const ConfirmFunc =  function(options){
  if(!options){
    options={}
  }
  options.visible=true

  return new Promise((resolve, reject) => { // eslint-disable-line
    options.resolve=resolve
    options.reject=reject
    let  instance = new ConfirmConstructor({
      data:options,  
    });
    
    //vc实例先mount再将el挂载到页面 
    instance.$mount();
    document.body.appendChild(instance.$el)
  });
}
//alert方法
const AlertFunc =  function(options){
  if(!options){
    options={}
  }
  options.visible=true
  //控制样式？
  options.style={}

  return new Promise((resolve, reject) => { // eslint-disable-line
    options.resolve=resolve
    options.reject=reject

    let  instance = new AlertConstructor({
      data:options,    
    });
    //vc实例先mount再将el挂载到页面 
    instance.$mount();
    document.body.appendChild(instance.$el)
  });
}

const PromptFunc =  function(options){
  if(!options){
    options={}
  }
  options.visible=true
  //控制样式？
  options.style={}

  return new Promise((resolve, reject) => { // eslint-disable-line
    options.resolve=resolve
    options.reject=reject

    let  instance = new PromptConstructor({
      data:options,    
    });
    //vc实例先mount再将el挂载到页面 
    instance.$mount();
    document.body.appendChild(instance.$el)
  });
}
export default {
  confirm:ConfirmFunc,
  alert:AlertFunc,
  prompt:PromptFunc
}