const { readFile, writeFile } = require('fs');

const firstFilePath = './contents/first.txt';
const secondFilePath = './contents/second.txt';
const resFilePath = './contents/result-async.txt';

readFile(firstFilePath, 'utf8', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    const firstContent = res;
    readFile(secondFilePath, 'utf8', (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        const secondContent = res;
        writeFile(resFilePath, `${firstContent} ${secondContent}`, (err) => {
            if (err)
                console.error(err);
            else 
                console.log('Data written successfully');
        });
    });
});