// PATH
console.log("PATH");
const path = require("path");
var pathObject = path.parse(__filename);
console.log(pathObject);

// OS
console.log("OS");
const os = require("os");
var totalMemory = os.totalmem();
var osType = os.type();

console.log("memory: " + totalMemory);
console.log("type: " + osType);
console.log(`os type is ${osType}`);

// FILE SYSTEM
console.log("FILE SYSTEM");
/*
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);
*/
// ALWAYS USE ASYNC
const fs = require('fs');
fs.readdir('./',function(err,files){
   if(err) console.log('Error', err);
   else console.log('Result', files);
})

// QUERY STRING
console.log("QUERYSTRING");
const qs = require("querystring");
const object = qs.parse("naam=Thomas&group=3");
console.log(object.naam);
console.log(object.group);