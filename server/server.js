    var express = require('express');
    var bodyParser = require('body-parser');

    var {mongoose} = require('./db/mongoose');

    var {Todo} = require('./models/todo');
    var {User} = require('./models/user');

    var {ObjectID} = require('mongoDB');

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

    app.get('/todos', (req, res) => {

        Todo.find().then((todos) => {
            res.send({todos});   //object more flexbile
        }, (e) => {
            res.status(400).send(e);
        })
    });

    //GET /todos/123

    app.get('/todos/:id', (req, res) => {
        //res.send(req.params);
        var id = req.params.id;

        //validate id using isValid
            //stop function if invalid 404 - send empty

        if (!ObjectID.isValid(id)){
            console.log("Annie id not valid");
            return res.status(404).send();
        }


        //findById
            //success
                //if todo - send back
                //if no todo - send 404 with empty body
            //error
                //400 - send empty

        Todo.findById(id).then( (todo) => {

            if (!todo){
                return res.status(404).send();
            }

            console.log(JSON.stringify(todo, undefined, 2));
            res.send({todo});
        }, (e) => {
            return res.status(400).send();
        })


    });

    app.listen(3000, () => {
        console.log('Started on port 3000');
    });

    module.exports = {app}

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