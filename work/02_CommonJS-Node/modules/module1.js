/**
 暴露模块:
 1. module.exports = value;
 2. exports.xxx = value;
 */

module.exports = {
  data:'atguigu',
  foo () {
    console.log(`module1-----foo(),${this.data}`)
  },
  bar () {
    console.log(`module1-----bar(),${this.data}`)
  }
}