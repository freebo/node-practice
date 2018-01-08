const sub = require('./sub.js');

const argv = require('yargs').argv;

///const argv = yargs.argv;

var command = argv._[0];
context.log('Command: ', command);

if (command === 'add'){
    sub.add(argv.title, argv.body);