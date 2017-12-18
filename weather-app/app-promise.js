
const yargs = require('yargs');

var date = new Date();
var current_hour = date.getHours();
var current_min = date.getMinutes();


const argv = yargs
    .options({
        a: {
            demand: true, 
            alias: 'address',
            describe: 'Address to get weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;



