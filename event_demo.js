const EventEmitter = require('events');
class myEmitter extends EventEmitter{}

const myEmitter = new myEmitter();

myEmitter.on('event', () => console.log('Event Fire!'));
//Init event
myEmitter.emit('event');