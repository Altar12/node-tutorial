const path = require('path');

// system specific separator for paths
console.log(path.sep);

// create a path by joining strings (with separator, if needed)
const filePath = path.join('node-tutorial/', 'node', '6-path-module.js');
console.log(filePath);

// get the base item name from a path
console.log(path.basename(filePath));