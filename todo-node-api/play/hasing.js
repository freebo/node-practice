const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data,'secret');
console.log(token);

var decoded = jwt.verify(token,'secret');
console.log('decoded ', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);

// console.log(`hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resutltHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resutltHash === token.hash) {
//     console.log('Data Not Changed');
// } else {
//     console.log('Data WAS changed, Do not trust!!!');
// }