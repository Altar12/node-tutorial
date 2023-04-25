// read content of two files, append the contents, and write to a new file
const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
};

const putText = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}

const runner = async () => {
    try {
        const firstData = await getText('./contents/first.txt');
        const secondData = await getText('./contents/second.txt');
        await putText('./contents/result-promises.txt', `${firstData} ${secondData}`);
    } catch (err) {
        console.error(err);
    }
}

runner();