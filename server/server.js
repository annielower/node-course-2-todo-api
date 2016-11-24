    var express = require('express');
    var bodyParser = require('body-parser');

    var {mongoose} = require('./db/mongoose');

    var {Todo} = require('./models/todo');
    var {User} = require('./models/user');


    var app = express();


    app.use(bodyParser.json()); //middleware to send to Express
    //create route to add
    app.post('/todos', (req, res) => {
        console.log(req.body);

        var todo = new Todo({
            text: req.body.text
        })

        todo.save().then((doc) => {
            res.send(doc);
        }, (e) =>{
            res.status(400).send(e);
        });
    });

    app.listen(3000, () => {
        console.log('Started on port 3000');
    });

    //var newTodo = new Todo({
    //    text: 'Cook dinner'
    //})
    //
    //newTodo.save().then((doc)=>{
    //console.log('saved todo', doc)
    //}, (e)=>{
    //    console.log('cannot save');
    //    });
    //
    //
    //var newTodo2 = new Todo({
    //    text: "mop floor", //typecast beware
    //
    //})
    //
    //newTodo2.save().then((doc) => {
    //    console.log(JSON.stringify(doc, undefined, 2));
    //}, (e) => {
    //    console.log('cannot save');
    //});
    //
    //
    //var newUser = new User({
    //    email: 'annie@blah.com'
    //});
    //
    //newUser.save().then((doc) => {
    //    console.log(JSON.stringify(doc, undefined, 2));
    //}, (e) => {
    //    console.log('cant save user');
    //});