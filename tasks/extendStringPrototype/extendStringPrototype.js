// Exted String object with reverse function.

String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}