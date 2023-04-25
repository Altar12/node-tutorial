// this code illustrates how any asynchronous function can be turned into a function returning a Promise
const { readFile, writeFile } = require('fs');
const util = require('util');

const read = util.promisify(readFile);
const write = util.promisify(writeFile);

const runner = async () => {
    try {
        const firstData = await read('./contents/first.txt', 'utf8');
        const secondData = await read('./contents/second.txt', 'utf8');
        await write('./contents/result-promises2.txt', `${firstData} ${secondData}`);
    } catch (err) {
        console.error(err);
    }
};

runner();