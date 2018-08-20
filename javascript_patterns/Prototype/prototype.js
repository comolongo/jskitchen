/**
 * Created by Lutskiy on 11.01.14.
 */

// Prototype pattern as being based on prototypal inheritance where we
// create objects which act as prototypes for other objects.


// Advantage:
// One of the benefits of using the prototype pattern is that we're working with the prototypal
// strengths JavaScript has to offer natively rather than attempting to imitate features of other languages.
// With other design patterns, this isn't always the case.


var myCar = {

    name: "Ford Escort",

    drive: function () {
        console.log( "Weeee. I'm driving!" );
    },

    panic: function () {
        console.log( "Wait. How do you stop this thing?" );
    }

};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );

// Now we can see that one is a prototype of the other
console.log( yourCar.name );
