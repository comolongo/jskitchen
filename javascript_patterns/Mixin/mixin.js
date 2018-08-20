/**
 * Created by Lutskiy on 12.01.14.
 */

// Mixins allow objects to borrow (or inherit) functionality from them with a minimal amount of complexity.
// As the pattern works well with JavaScripts object prototypes,
// it gives us a fairly flexible way to share functionality from not just one Mixin,
// but effectively many through multiple inheritance.

// Advantages:
// Mixins assist in decreasing functional repetition and increasing function re-use in a system.

// Disadvantages:
// Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both
// prototype pollution and a level of uncertainly regarding the origin of our functions

// A skeleton carAnimator constructor
var myMixins = {

    moveUp: function(){
        console.log( "move up" );
    },

    moveDown: function(){
        console.log( "move down" );
    },

    stop: function(){
        console.log( "stop! in the name of love!" );
    }

};

function carAnimator(){
    this.moveLeft = function(){
        console.log( "move left" );
    };
}

// A skeleton personAnimator constructor
function personAnimator(){
    this.moveRandomly = function(){ /*..*/ };
}

// Extend both constructors with our Mixin
_.extend( carAnimator.prototype, myMixins );
_.extend( personAnimator.prototype, myMixins );

// Create a new instance of carAnimator
var myAnimator = new carAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!
