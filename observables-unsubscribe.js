var button = document.querySelector('button');
var observer = {
    next: function(value){ //Called when the next event is emitted on the stream
        console.log(value);
    },
    error: function(error){ //Called when an error occurs. Note: this also ends the stream , so no next will be fired after
        console.log('Error: '+error);
    },
    complete: function(){ //Called when the complete method is called by the observable
        console.log('Completed');
    }
}

var createObs = Rx.Observable.create(function(obs){ //Accepts an observer object on which next, error and setTimeout can be called
    //The way observers differ from promises is multiple events can be emitted at different times from the same observable
    //and the observers that subscribe to the next method will get the events as they are emitted
    button.onclick = function(event){
        obs.next(event);
    };
})

.subscribe(observer);

setTimeout(function(){ //Unsubscribe to the observable when you no longer need it in order to avoid memory leaks
    createObs.unsubscribe();
},5000)