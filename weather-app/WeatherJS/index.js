const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://mjfhwork:QF6ib98KP8UCg4MvEdsmdONjYUwPcbChuwEYVaVECcCi00LwUIRfnzA9sItPJ7CHFjijGDespRXcloXXL1fRuA==@mjfhwork.documents.azure.com:10255/TodoApp?ssl=true", (err, db) => {
    if (err) {
        return context.log('Could not open db')
    }
    context.log('Connected to db');
});

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
}
    context.done();

