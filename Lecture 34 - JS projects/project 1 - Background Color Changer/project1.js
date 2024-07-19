const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(event){  // jab jab button par click hoga.. hum yai function ko call back krenge.
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'yellow'){ 
            body.style.background = event.target.id; // humne style.background(way to change bg in js) use target id ke barabr krdiyaa. target means jab wo event occur ho.
        }
        if(event.target.id === 'red'){
            body.style.background = event.target.id;
        }
        if(event.target.id === 'orange'){ // they are not colors. they are id's
            body.style.background = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.background = event.target.id;
        }
    })
});


