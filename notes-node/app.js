console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');
const argv = require('yargs').argv;

///const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);

if (command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if (command ==='list'){
    notes.getAll();
} else if (command ==='read'){
    notes.readNote(argv.title);
} else if (command ==='remove'){
    notes.rmNote(argv.title);
}
else {
    console.log('Unknown');
}