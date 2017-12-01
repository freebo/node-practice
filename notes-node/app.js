console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var fiArray = _.uniq(['Mike', 1, 'Mike', 1, 2, 3, 4]);
console.log(fiArray);

// console.log(_.isString(true));
// console.log(_.isString('Mike'));

// var res = notes.addNote();

// console.log(res);

// var numb = notes.add(9,-2);

// console.log(numb);





// var user = os.userInfo();




// fs.appendFile('greetings.txt',`Hello ${user.username}!!!! you are ${notes.age}`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });


