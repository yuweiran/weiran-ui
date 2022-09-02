
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
      {
      path:"/wrui/basic",
      redirect:"/wrui/basic/button",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {
      path:"button",
      component:()=>import('@/docs/button.md')
    }
    ,
{
      path:"grid",
      component:()=>import('@/docs/grid.md')
    }
    ,
{
      path:"icon",
      component:()=>import('@/docs/icon.md')
    }
    ,
{
      path:"input",
      component:()=>import('@/docs/input.md')
    }
    
      ],
    }  
    ,
{
      path:"/wrui/data",
      redirect:"/wrui/data/button",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {
      path:"button",
      component:()=>import('@/docs/button.md')
    }
    
      ],
    }  
    ,
{
      path:"/wrui/form",
      redirect:"/wrui/form/button",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {
      path:"button",
      component:()=>import('@/docs/button.md')
    }
    
      ],
    }  
    ,
{
      path:"/wrui/notice",
      redirect:"/wrui/notice/button",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {
      path:"button",
      component:()=>import('@/docs/button.md')
    }
    
      ],
    }  
    ,
{
      path:"/wrui/ohter",
      redirect:"/wrui/ohter/video",
      component:()=>import("@/components/wrui-middle-router.vue"),
      children:[
        {
      path:"video",
      component:()=>import('@/docs/video.md')
    }
    ,
{
      path:"drag",
      component:()=>import('@/docs/drag.md')
    }
    ,
{
      path:"test",
      component:()=>import('@/docs/test.md')
    }
    
      ],
    }  
    
    ]
  