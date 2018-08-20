/**
 * Created by Lutskiy on 12.01.14.
 */


// In the proxy design pattern, one object acts as an interface to another object.
// The proxy sits between the client of an object and the object itself and protects the access to that object.
// This pattern may look like overhead but it’s useful for performance purposes.
// The proxy serves as a guardian of the object (also called a “real subject”)
// and tries to have the real subject do as little work as possible.

// Stoyan Stefanov example
// The proxy sets up a queue to collect the IDs of the videos received in the past 50ms and then flushes the queue
// calling http and provides its own callback function, because the videos.updateList() callback
// can handle only a single data record.

var proxy = { ids: [],
    delay: 50,
    timeout: null,
    callback: null,
    context: null,
    makeRequest: function (id, callback, context) {
        this.ids.push(id);
        this.callback = callback;
        // add to the queue
        this.context = context;
        // set up timeout
        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                proxy.flush();
            }, this.delay);
        }
    },

    flush: function () {
        http.makeRequest(this.ids, "proxy.handler");
        // clear timeout and queue
        this.timeout = null;
        this.ids = [];
    },

    handler: function (data) {
        var i, max;
        // single video
        if (parseInt(data.query.count, 10) === 1) {
            proxy.callback.call(proxy.context, data.query.results.Video);
            return;
        }
        // multiple videos
        for (i = 0, max = data.query.results.Video.length; i < max; i += 1) {
            proxy.callback.call(proxy.context, data.query.results.Video[i]);
        }
    }
};
