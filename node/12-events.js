const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('my event', () => {
    console.log('"my event" event emitted');
});
emitter.on('my event', (name, age) => {
    console.log(`Hi! I am ${name} and I am ${age} years old!!`);
});

// can pass any no. of args while emitting the event
emitter.emit('my event', 'Shubham', 22);