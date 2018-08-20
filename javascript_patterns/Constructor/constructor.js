/**
 * Created by Lutskiy on 10.01.14.
 */

// Object constructors are used to create specific types of objects - both preparing the object
// for use and accepting arguments which a constructor can use to set the values of member
// properties and methods when the object is first created.

// Each of the following options will create a new empty object:

var newObject = {};

// or
var newObject = Object.create( Object.prototype );

// or
var newObject = new Object()

//-------------------------------------------------------

function Car( model, year, miles, engine ) {

    this.model = model;
    this.year = year;
    this.miles = miles;
    this.engine = engine;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}

// Usage:

// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000, '2.4' );
var mondeo = new Car( "Ford Mondeo", 2010, 5000, '3.5' );

// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );


//-------------------------------------------------------


function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;

}


// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );

console.log( civic.toString() );
console.log( mondeo.toString() );