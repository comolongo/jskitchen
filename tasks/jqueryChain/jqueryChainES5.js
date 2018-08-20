// Implement jquery chain
// $(selector).click(alert(123)).html('test').css('border:1px solid red;color:red;')
// Use let/const, arrow function, Promise


function $(selector){

  function jQuery(){};

  jQuery.prototype = {
    _selectAll: document.querySelectorAll(selector),

    each: function(fn){
      this.get().forEach(function(element){
        fn(element);
      });
    },

    get: function() {
      return this._selectAll;
    },

    click: function(fn) {
      this.each(function(element){
        element.addEventListener('click', fn);
      })
      return this;
    },

    html: function(html) {
      this.each(function(element){
        element.innerHTML = html;
      })
      return this;
    },
    
    css: function(css) {
      //Save inline css to avoid overwriting.
      this.each(function(element){
        var saveCSS = element.getAttribute('style') || '';
        element.setAttribute('style', saveCSS + css);
      })

      return this;
    },
  };

  // Return new instance of jquery object.
  return new jQuery();
}