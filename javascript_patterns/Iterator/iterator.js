/**
 * Created by Lutskiy on 12.01.14.
 */

// In the iterator pattern, you have an object containing some sort of aggregate data.
// This data may be stored internally in a complex structure,
// and you want to provide easy access to each element of that structure.
// The consumer of your object doesn’t need to know how you structure your data;
// all they need is to work with the individual elements.

var agg = (function () {
    var index = 0,
        data = [1, 2, 3, 4, 5],
        length = data.length;

    return {
        next: function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 2;
            return element;
        },

        rewind: function () {
            index = 0;
        },

        current: function () {
            return data[index];
        },

        hasNext: function () {
            return index < length;
        }
    };
}());

// this loop logs 1, then 3, then 5
while (agg.hasNext()) {
    console.log(agg.next());
}
// go back
agg.rewind();
console.log(agg.current()); // 1
