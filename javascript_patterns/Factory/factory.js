/**
 * Created by Lutskiy on 12.01.14.
 */

// The purpose of the factory is to create objects. It’s usually implemented in a class or a static method of a class,
// which has the following purposes:
//  • Performs repeating operations when setting up similar objects
//  • Offers a way for the customers of the factory to create objects without knowing the specific type (class) at compile time

// Disadvantages:
// Pattern can introduce an unnecessarily great deal of complexity to an application
// also can introduce problems with unit testing depending on just how complex this process might be.

// Types.js - Constructors used behind the scenes

// A constructor for defining new cars
function Car( options ) {

    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck( options){

    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}


// FactoryExample.js

// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function ( options ) {

    if( options.vehicleType === "car" ){
        this.vehicleClass = Car;
    }else{
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
    vehicleType: "car",
    color: "yellow",
    doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( car instanceof Car );

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
console.log( car );

