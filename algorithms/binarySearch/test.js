//function func() {
//    return     {
//        name: "Batman"
//    };
//}
//
//console.log(func());

//
//function Waffle() {
//    var that = {};
//    that.__proto__ = { constructor: Waffle };
//    that.tastes = "yummy";
//    return that;
//}
//
//function Waffle2() {
//
//    this.tastes = "yummy";
//
//}
//
//
//var w = Waffle();
//console.log(w.tastes)
//
//var w2 = new Waffle2();
//console.log(w2.tastes)


//
//Array.prototype.map = function(iteratee){
//    var list = this;
//    console.log(list);
//    var i = list.length;
//    while(i--){
//        list[i] = iteratee(list[i]);
//    }
//
//    return list;
//
//}
//
//
//var aSort = [10, 30, 50];
//aSort = aSort.map(function(num){
//    return num + 5;
//});
//console.log(aSort);



function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}


var items = ["a","b","c","d","e","f","g","h","i","j"];
alert(binarySearch(items, "i"));    //8
alert(binarySearch(items, "b"));   //1