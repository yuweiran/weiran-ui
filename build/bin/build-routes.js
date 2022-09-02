//生成路由文件 以及菜单数据
const path =require('path')
const fs =require('fs')
var render = require('json-templater/string');
const upperCamelCase = require('uppercamelcase');
var endOfLine = require('os').EOL;

const ROUTE_FILE_PATH = path.join(__dirname,'../../examples/routers/data')
const MOCK_FILE_PATH = path.join(__dirname,'../../examples/mock/menu.js')

 fs.readdir(ROUTE_FILE_PATH,{encoding:'utf-8'},(err,files)=>{
  const pathList = files.map(filepath=>{
    return path.resolve(ROUTE_FILE_PATH,filepath)
  })
   createRoutes(pathList).then(routesFileContent=>{
      fs.writeFile(path.join(ROUTE_FILE_PATH,'../routes.js') ,routesFileContent,{encoding:'utf-8'},()=>{})
   },(err)=>{
    console.error(err)
   })
   createMenu(pathList).then(menuData=>{
    fs.writeFile(MOCK_FILE_PATH,menuData,{encoding:'utf-8'},()=>{})
 },(err)=>{
  console.error(err)
 })
})

//生成目录
async function createMenu(pathList){
  const MENU_TEMPLATE = `
    const menuData = [
      {{menuList}}
    ]
    export default  menuData
  `
  let menuItemList=[]
  const getContentList= async ()=>{
    const MENU_GROUP_TEMPLATE = `{
      path:"{{menuGroupPath}}",
      children:[
        {{childrenList}}
      ],
      text:"{{menuGroupName}}"
    }  
    `
    const MENU_ITEM_TEMPLATE = `{
      path:"{{menuItemPath}}",
      text:"{{menuItempName}}"
    }
    `
    let childrenRoutesList =[]
    let rootGroupList = []

    for(let path of pathList){
     const fileContent = fs.readFileSync(path,{encoding:"utf-8"})
     const groupObject = JSON.parse(fileContent)
        if(groupObject.group&&groupObject.children.length>0){
           groupObject.children.forEach(child=>{
            let path = child.path.split('')
            path.shift()
            childrenRoutesList.push(render(MENU_ITEM_TEMPLATE,{
              menuItemPath:path.join(''),
              menuItempName:`${upperCamelCase(path.join(''))}    ${child.name}`
            }))
    
          })
  
          rootGroupList.push(render(MENU_GROUP_TEMPLATE,{
            menuGroupPath: `/wrui/${groupObject.group}`,
            menuGroupName:groupObject.group,
            childrenList:childrenRoutesList.join(',' + endOfLine)
          }))
          childrenRoutesList=[]
        }
    }
    return rootGroupList
  }
  menuItemList =await getContentList()
  const target =  render(MENU_TEMPLATE,{
    menuList:menuItemList.join(',' + endOfLine)
  })
  return target
}

//生成路由
const createRoutes = async(pathList)=>{
  const ROUTE_TEMPLATE = `
    export default [
      {path: "/", redirect: "/wrui"},
      {
        path:"/wrui",
        redirect:"/wrui/guide",
      },
      {
        path:"/wrui/guide",
        component:()=>import("@/docs/guide.md")
      }
      ,
      {{routeList}}
    ]
  `


  let rootRoutesList = []


  const getContentList= async ()=>{
    const ROUTE_ROOT_TEMPLATE = `{
      path:"{{routePath}}",
      redirect:"{{firstChild}}",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {{childrenList}}
      ],
    }  
    `
    const ROUTE_CHILD_TEMPLATE = `{
      path:"{{routePath}}",
      component:()=>import('@/docs/{{routeName}}.md')
    }
    `
    let childrenRoutesList =[]
    let rootRoutesList = []

    for(let path of pathList){
     const fileContent = fs.readFileSync(path,{encoding:"utf-8"})
     const groupObject = JSON.parse(fileContent)
        if(groupObject.group&&groupObject.children.length>0){
           groupObject.children.forEach(child=>{
            let path = child.path.split('')
            path.shift()
            childrenRoutesList.push(render(ROUTE_CHILD_TEMPLATE,{
              routePath:path.join(''),
              routeName:path.join('')
            }))
    
          })
  
          rootRoutesList.push(render(ROUTE_ROOT_TEMPLATE,{
            routePath: `/wrui/${groupObject.group}`,
            firstChild:`/wrui/${groupObject.group+groupObject.children[0].path}`,
            childrenList:childrenRoutesList.join(',' + endOfLine)
          }))
          childrenRoutesList=[]
        }
    }
    return rootRoutesList
  }

  rootRoutesList =await getContentList()
  const target =  render(ROUTE_TEMPLATE,{
    routeList:rootRoutesList.join(',' + endOfLine)
  })
  return target
}