//定义一个没有依赖的module2模块
define(function (require,exports,module) {
  var name = 'module2';

  function fun2() {
    console.log(name);
  }

  //暴露模块
  module.exports = fun2
});