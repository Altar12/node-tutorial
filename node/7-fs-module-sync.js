const { readFileSync, writeFileSync } = require('fs');

const firstFilePath = './contents/first.txt';
const secondFilePath = './contents/second.txt';
const resultFilePath = './contents/result-sync.txt';

// read the file contents in strings
const firstContent = readFileSync(firstFilePath, 'utf8');
const secondContent = readFileSync(secondFilePath, 'utf8');

// write the read contents to a new file (will be created if not already exists, overwritten otherwise)
writeFileSync(resultFilePath, `${firstContent} ${secondContent}`);

// append to the file, creates file and perform simple write if not exists
writeFileSync(resultFilePath, ' This is an appended line', { flag: 'a' });