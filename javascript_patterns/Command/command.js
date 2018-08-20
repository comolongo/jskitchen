/**
 * Created by Lutskiy on 11.01.14.
 */

// The Command pattern aims to encapsulate method invocation,
// requests or operations into a single object and gives us the ability to both parameterize and
// pass method calls around that can be executed at our discretion.




(function(){

    var CarManager = {

        // request information
        requestInfo: function( model, id ){
            return "The information for " + model + " with ID " + id + " is foobar";
        },

        // purchase the car
        buyVehicle: function( model, id ){
            return "You have successfully purchased Item " + id + ", a " + model;
        },

        // arrange a viewing
        arrangeViewing: function( model, id ){
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }

    };

})();

// Non Command pattren
CarManager.arrangeViewing( "Ferrari", "14523" );
CarManager.requestInfo( "Ford Escort", "34232" );
CarManager.buyVehicle( "Ford Escort", "34232" );

// Command pattren
CarManager.execute = function ( name ) {
    return CarManager[name] && CarManager[name].apply( CarManager, [].slice.call(arguments, 1) );
};

CarManager.execute( "arrangeViewing", "Ferrari", "14523" );
CarManager.execute( "requestInfo", "Ford Mondeo", "54323" );
CarManager.execute( "buyVehicle", "Ford Escort", "34232" );

