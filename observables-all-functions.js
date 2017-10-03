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

//Create an observable from the button click event
Rx.Observable.fromEvent(button,'click').subscribe(observer);
