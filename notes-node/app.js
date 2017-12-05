console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
    console.log('Adding');
} else if (command ==='list'){
    console.log('Listing');
} else {
    console.log('Unknown');
}