function Subject(){
    ver observers = [];
    var self = this;

    this.notifyAll = function(){
        self.observers.forEach(function(observer){
            observer.update(self);
        })
    };

    this.subscribe = function(observer){
        observers.push(observer);
    };

    this.unsubscribe = function(observer){
        observers.filter(function(ob){
            return observer == ob;
        })
    };
}

var subject = new Subject();
var observer1 = function(){
    this.update = function(){
        alert(1);
    }
}

var observer2 = function(){
    this.update = function(){
        alert(2);
    }
}

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notifyAll();
