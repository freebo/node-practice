const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const config = require ('./config.js');



const {mongooose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const {ObjectID} = require('mongodb');

var app = express();

const port = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((user) => {
        res.send(user);

    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        // console.log('Invalid ID');
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            console.log('Id not found');
            return res.status(404).send();
        }  
        res.send({todo});
    }).catch ((e) => {
        res.status(400).send;
    });
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/users/me', (req, res) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            console.log('no user', token);
        }
        console.log('found user');
        res.send(user);
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        // console.log('Invalid ID');
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

    res.send({todo});

    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    //
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        // console.log('Invalid ID');
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            console.log('Id not found');
            return res.status(404).send();
        }  
        res.send({todo});
    }).catch ((e) => {
        res.status(400).send;
    });
});

    //


app.listen(port, () => {
    console.log(`Listening on ${port}`);
})
