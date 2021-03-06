// Implement custom bind function.

Function.prototype.bind = function(scope){
  var fn = this;
  return function () {
    return fn.apply(scope);
  }
}