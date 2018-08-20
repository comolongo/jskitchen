/**
 * Created by Lutskiy on 12.01.14.
 */
// In the decorator pattern, additional functionality can be added to an object dynamically, at runtime.
// When dealing with static classes, this could be a challenge. In JavaScript, objects are mutable,
// so the process of adding functionality to an object is not a problem in itself.

// Advantages:
// objects can be wrapped or "decorated" with new behavior and then continue to be used without needing
// to worry about the base object being modified.

// Disadvantages:
// If poorly managed, it can significantly complicate our application architecture as it introduces many small,
// but similar objects into our namespace.


// The constructor to decorate
function MacBook() {

    this.cost = function () { return 997; };
    this.screenSize = function () { return 11.6; };

}

// Decorator 1
function Memory( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    };

}

// Decorator 2
function Engraving( macbook ){

    var v = macbook.cost();
    macbook.cost = function(){
        return  v + 200;
    };

}

// Decorator 3
function Insurance( macbook ){

    var v = macbook.cost();
    macbook.cost = function(){
        return  v + 250;
    };

}

var mb = new MacBook();
Memory( mb );
Engraving( mb );
Insurance( mb );

// Outputs: 1522
console.log( mb.cost() );

// Outputs: 11.6
console.log( mb.screenSize() );