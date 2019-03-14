/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

((window,$)=>{
  let data = 'atguigu'

  function foo() {
    console.log(`module1-----foo(),${data}`)
  }
  $('body').css('background','skyblue')
  window.foo = foo
})(window,jQuery)