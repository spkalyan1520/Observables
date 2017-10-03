
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

Rx.Observable.create(function(obs){ //Accepts an observer object on which next, error and setTimeout can be called
    //The way observers differ from promises is multiple events can be emitted at different times from the same observable
    //and the observers that subscribe to the next method will get the events as they are emitted
    setTimeout(function(){
        obs.next('A value');
    },2000);
    setTimeout(function(){
        obs.next('A second value');
    },2000);
    setTimeout(function(){
        obs.complete();
    },6000);
})

.subscribe(observer);