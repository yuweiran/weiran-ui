//得到所有icon类名,生成icons.json文件，这个文件内容可以用来在example项目中页面渲染icons列表
//vue2，element-ui做法是将icons.json文件引入到，main.js（入口文件），
//import icons from "./icons.json" 因为文档就是个独立项目，自己随便引入，不影响发包啦
//再Vue.prototype.$icons = icons。这里学习iconfont做法

const path = require('path')
const fs = require('fs')
const render = require('json-templater/string')

const PUBLIC_PATH = path.join(__dirname,'../../src/')

const ICONS_SOURCE_PATH = path.join(PUBLIC_PATH,'styles/icons/iconfont.json')

const ICONS_JSON_PATH = path.join(PUBLIC_PATH,'../examples/icons.json')

const JSON_CONTENTS_TEMPLATE = `{{content}}`
  
let allIconsList =[]

let iconsFileInfo = JSON.parse(fs.readFileSync(ICONS_SOURCE_PATH,{encoding:'utf-8'}))

iconsFileInfo.glyphs.forEach(icon=>{
  allIconsList.push('wr-icon-'+icon.font_class)
})

fs.writeFile(ICONS_JSON_PATH,render(JSON_CONTENTS_TEMPLATE,{
  content:JSON.stringify(allIconsList)
}),()=>{})