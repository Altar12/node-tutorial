const os = require('os');

// system uptime in seconds
console.log(`System has been up for ${os.uptime()} seconds`);

// info about the current user
const info = os.userInfo();
console.log('User Information:');
console.log(info);

const systemInfo = {
    os: os.type(), // os name ('Linux' for linux)
    release: os.release(), // linux kernel version for linux
    totalmem: os.totalmem(), // total RAM in bytes
    freemem: os.freemem(), // free RAM in bytes
};
console.log('System Information:');
console.log(systemInfo);