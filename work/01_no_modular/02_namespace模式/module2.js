/**
 * namespace模式: 简单对象封装
 * 作用: 减少了全局变量
 * 问题: 不安全(数据不是私有的)
 */


let myModule2 = {
  data:'尚硅谷',
  foo () {
    console.log(`moduel2------foo(),${this.data}`)
  },
  bar () {
    console.log(`moduel2------bar(),${this.data}`)
  }
}