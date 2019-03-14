/**
 1. 定义暴露模块:
 module.exports = value;
 exports.xxx = value;
 2. 引入模块:
 var module = require(模块名或模块路径);
 */

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let a = require('uniq')

let arr = [10,1,4,2,3,5,6,4,2,3,5,6,7,9,8,11]

module1.foo()
module1.bar()

module2()

module3.foo()
console.log(module3.bar);

console.log(a(arr));



