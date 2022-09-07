//遍历src/styles/common 文件夹生成 src/styles/variables.scss。只是做了下文件引入
//遍历src/styles/components 文件夹生成 src/styles/all.scss。只是做了下文件引入

const path = require('path');
const render = require('json-templater/string');
const endOfLine = require('os').EOL;
const fs = require('fs')

const STYLES_PATH = path.join(__dirname,'../../src/styles/')

const VAR_SCSS_PATH = path.join(STYLES_PATH,'./variables.scss')
const ALL_SCSS_PATH = path.join(STYLES_PATH,'./index.scss')
const COMPONENTS_DIR_SCSS_PATH = path.join(STYLES_PATH,'./components/')
const COMMON_DIR_SCSS_PATH = path.join(STYLES_PATH,'./common/')

const SCSS_IMPORT_TEMPLATE = `
 @import "{{filePath}}";`
const VAR_SCSS_TEMPLATE = `
//公共样式、样式变量统一导入
{{content}}`
const ALL_SCSS_TEMPLATE = `
//全部组件样式统一导入
 @import "../icons/iconfont.css";
{{content}}`
  
let variablesImportList = []
let allImportList =[]

let commonFiles = fs.readdirSync(COMMON_DIR_SCSS_PATH)
commonFiles.forEach(file=>{
  variablesImportList.push(render(SCSS_IMPORT_TEMPLATE,{
    filePath:"./common/"+file
  }))
})

let componentsFiles = fs.readdirSync(COMPONENTS_DIR_SCSS_PATH)
componentsFiles.forEach(file=>{
  allImportList.push(render(SCSS_IMPORT_TEMPLATE,{
    filePath:"./components/"+file
  }))
})


fs.writeFile(VAR_SCSS_PATH,render(VAR_SCSS_TEMPLATE,{
  content:variablesImportList.join(""+endOfLine)
}),()=>{})

fs.writeFile(ALL_SCSS_PATH,render(ALL_SCSS_TEMPLATE,{
  content:allImportList.join(""+endOfLine)
}),()=>{})