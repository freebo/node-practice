

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mjfhwork:QF6ib98KP8UCg4MvEdsmdONjYUwPcbChuwEYVaVECcCi00LwUIRfnzA9sItPJ7CHFjijGDespRXcloXXL1fRuA==@mjfhwork.documents.azure.com:10255/TodoApp?ssl=true";


module.exports = function ((context, req) {
    
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return context.log('Could not open db')
        }
        context.log('Connected to db');
    });
});


    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err,result) => {
    //     if (err) {
    //         return console.log ('Unable to insert Todo');
    //     } 
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });
/*
//     db.collection('Users').insertOne({
//         name: 'Mike Freeman',
//         age: 21,
//         location: 'Gold Coast'
//
//     }, (err,result) => {
//         if (err) {
//             return console.log ('Unable to insert User', err);
//         } 
//         console.log(JSON.stringify(result.ops,undefined,2))
//     });
//   db.close();
//
*/
