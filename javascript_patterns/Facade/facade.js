/**
 * Created by Lutskiy on 12.01.14.
 */

// Facades are a structural pattern which can often be seen in JavaScript libraries like jQuery where,
// although an implementation may support methods with a wide range of behaviors,
// only a "facade" or limited abstraction of these methods is presented to the public for use.

var addMyEvent = function( el,ev,fn ){

    if( el.addEventListener ){
        el.addEventListener( ev,fn, false );
    }else if(el.attachEvent){
        el.attachEvent( "on" + ev, fn );
    } else{
        el["on" + ev] = fn;
    }

};
