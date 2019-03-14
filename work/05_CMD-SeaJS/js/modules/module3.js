//定义一个没有依赖的module3模块
define(function (require,exports,module) {
  var name = 'module3';

  function foo() {
    console.log(name);
  }

  //暴露模块
  module.exports = {foo}
});