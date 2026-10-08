const EventEmitter = require('events');  // you need this module to understand what to do

// Klasse Logger
const Logger = require('./loggerModule');  
// Object logger
const logger = new Logger();   // you create a class out of the exported function. This exported function already has an emitter object


logger.on('messageLogged', (arg) => {      // we listen to the event with parameters and then print them.
   console.log('Listener called', arg);
})

logger.log('message');  // we call the function, which sends an events AND prints 'message'