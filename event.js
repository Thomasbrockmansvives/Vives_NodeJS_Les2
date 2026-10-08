const EventEmitter = require('events');
const emitter = new EventEmitter();

//LISTENER
emitter.on('messageLogged', function(){
   console.log('They called us');
})

//EMITER
emitter.emit('messageLogged');



//WITH PARAMETERS
const EventEmitterParams = require('events');
const emitterparams = new EventEmitterParams();

emitter.on('specialMessage', function(arg){
   console.log('Somebody called: ', arg);
})

emitter.emit('specialMessage', 'Thomas');
emitter.emit("specialMessage", {name: 'Carol', age: 46});