// 定义一个没有依赖的module1模块
define(function (require,exports,module) {
  var name = 'module1';

  function fun() {
    console.log(name);
  }

  //暴露模块
  exports.showName = {fun}
});