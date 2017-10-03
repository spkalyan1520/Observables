var button = document.querySelector('button');

//Create an observable from the button click event
var buttonObs = Rx.Observable.fromEvent(button,'click'

//Subscribe to the observable's next event
buttonObs.subscribe(
    (value) => console.log(value.clientX)
);
