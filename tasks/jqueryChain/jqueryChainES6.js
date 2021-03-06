// Implement jquery chain using ES6
// $(selector).click(alert(123)).html('test').css('border:1px solid red;color:red;')
// Use let/const, arrow function, ...

class jQuery {
  constructor(selector) {
    this.selectAll = document.querySelectorAll(selector);
  }

  each(fn) {
    this.get().forEach(element => {
      fn(element);  
    });
  }

  get() {
    return this.selectAll;
  }

  click(fn) {
    this.each(element => {
      element.addEventListener('click', fn);
    });
    return this;
  }

  html(html) {
    this.each(element => {
      element.innerHTML = html;
    });
    return this;
  }
  
  css(css) {
    //Save inline css to avoid overwriting.
    this.each(element => {
      let saveCSS = element.getAttribute('style') || '';
      element.setAttribute('style', saveCSS + css);
    });

    return this;
  }
};

function $(selector){
  // Return new instance of jquery class.
  return new jQuery(selector);
}