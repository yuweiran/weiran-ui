//packages/组件/index.js生成
const fs = require('fs')
const path = require('path')
const uppercamelcase = require('uppercamelcase');
const render = require('json-templater/string');

const INSTALL_TEMPLATE2 =  `
import {{upperName}} from './src/main.js';
export default {{upperName}};
`

const INSTALL_TEMPLATE =`
import {{upperName}} from './src/{{componetName}}';

/* istanbul ignore next */
{{upperName}}.install = function(Vue) {
  Vue.component({{upperName}}.name, {{upperName}});
};

export default {{upperName}};
`
const COMPONENTS_DEFINE_PATH  = path.join(__dirname,'../../packages/')

fs.readdir(COMPONENTS_DEFINE_PATH,{encoding:'utf-8'},(err,files)=>{
  files.forEach(item=>{
    let excludeComponents=['checkbox-group','drag']
    //这里面组件手写install文件
    if(excludeComponents.indexOf(item)===-1){
      const srcPath = path.join(COMPONENTS_DEFINE_PATH,`./${item}/src/`)
      let srcFiles =  fs.readdirSync(srcPath,{encoding:"utf-8"})
      const componentPath = path.join(COMPONENTS_DEFINE_PATH,`./${item}/index.js`)
      let  content
      if(srcFiles.indexOf('main.js')===-1){
  
         content = render(INSTALL_TEMPLATE,{
          upperName:uppercamelcase(`wr-${item}`),
          componetName:item
        })
        
      }else{
        content = render(INSTALL_TEMPLATE2,{
          upperName:uppercamelcase(item),
        })
      }
      fs.writeFile(componentPath,content,{encoding:'utf-8'},()=>{})
    }
  })
})