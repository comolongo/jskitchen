/**
 * Created by Lutskiy on 10.01.14.
 */

// The idea of the singleton pattern is to have only one instance of a specific class.
// This means that the second time you use the same class to create a new object,
// you should get the same object that was created the first time.

// In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code
// from the global namespace so as to provide a single point of access for functions.



var Universe = function() {
    // the cached instance
    var instance;

    // rewrite the constructor
    Universe = function Universe() {
        return instance;
    };

    // carry over the prototype properties
    Universe.prototype = this;

    // the instance
    instance = new Universe();

    // reset the constructor pointer
    instance.constructor = Universe;

    function privatFunc(){
        console.log('data');
    }

    // all the functionality
    instance = {
        start_time: 0,
        bang: "Big",
        logData: function(){
            privatFunc();
        }

    }
    return instance;
}

var obj = Universe();
var obj2 = Universe();
obj.logData();
console.log(obj == obj2);