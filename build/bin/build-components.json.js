//生成components.json。组件和路径的映射
//遍历packages文件夹下目录
const path = require('path')
const fs = require('fs')
const render = require('json-templater/string')
const endOfLine = require('os').EOL

const COMPONENTS_DEFINE_PATH  = path.join(__dirname,'../../packages/')
const COMPONENTS_JSON_PATH = path.join(__dirname,'../../components.json')

let COMPONENTS_PATH_TEMPLATE=`"{{componentName}}":"./packages/{{componentName}}/index.js"`

let COMPONENTS_JSON_TEMPLATE =`{
{{pathList}}
}`

let pathList = []

fs.readdir(COMPONENTS_DEFINE_PATH,{encoding:'utf-8'},(err,files)=>{
  files.forEach(item=>{
    pathList.push(render(COMPONENTS_PATH_TEMPLATE,{
      componentName:item
    }))
  })
  const content = render(COMPONENTS_JSON_TEMPLATE,{
    pathList:pathList.join(',' + endOfLine)
  })
  fs.writeFile(COMPONENTS_JSON_PATH,content,()=>{})
})