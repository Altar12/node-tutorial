/*
    Some of the globally available variables:
    __dirname
    __filename
    require
    module
    process
    setTimeout/clearTimeout
    console
*/

console.log(`We are currently in ${__dirname} directory`);
console.log(`Full path to the file: ${__filename}`);

// print 'Hello World!' 5 times.
const lag = 1000; //in ms
const timesToPrint = 5;

const intervalId = setInterval(() => {
                        console.log('Hello World!');
                    }, lag);

setTimeout(() => {
    clearInterval(intervalId);
}, lag * (timesToPrint+1));