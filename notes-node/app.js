console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');
const argv = require('yargs').argv;

///const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add'){
    console.log('Adding');
} else if (command ==='list'){
    console.log('Listing');
} else if (command ==='read'){
    console.log('Reading');
} else if (command ==='remove'){
    console.log('Removing');
}
else {
    console.log('Unknown');
}