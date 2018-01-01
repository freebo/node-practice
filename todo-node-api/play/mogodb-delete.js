// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://mjfhwork:QF6ib98KP8UCg4MvEdsmdONjYUwPcbChuwEYVaVECcCi00LwUIRfnzA9sItPJ7CHFjijGDespRXcloXXL1fRuA==@mjfhwork.documents.azure.com:10255/TodoApp?ssl=true", (err, db) => {
    if (err) {
        return console.log('Could not open db')
    }
    console.log('Connected to db');

});

    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a3b3eaed59b29101ccd60f8')
    // }).toArray().then((docs) =>  {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));

    // }, err => {
    //     console.log('Ubable to fetch', err)
    // });

    //     db.collection('Todos').find().count().then((count) =>  {
    //     console.log(`Todos count: ${count}`);
        

    // }, err => {
    //     console.log('Ubable to fetch', err)
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a3b3807d46b06c92211ee80')
    }, {
        $set: {
            name: 'Rufus Barkalot Freeman'
        },
        $inc: {  
            age: +1 
        }
    }, {
        returnOrigional: false
    }).then((result) => {
        console.log(result);
    })

   

    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) =>  {
    //     console.log(result);
    // });


//   db.close();
});