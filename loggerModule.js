const EventEmitter = require('events');

var url = 'http://mijnlogger.io:log';

class Logger extends EventEmitter{        // by extends this class also is an EventEmitter. So each object is a Logger AND EventEmitter
   log(message) {
      console.log(message);    // the function wil print the message
      this.emit('messageLogged', {id: 1, url : 'blablabla'});         //the function emits an event with parameters
   }
}

module.exports = Logger;  // the class is exported and used by app.js     