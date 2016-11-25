const {ObjectID} = require('mongodb'); //ES6 shortcut defunc

    const {mongoose} = require('./../server/db/mongoose');
    const {Todo} = require('./../server/models/todo');
    const {User} = require('./../server/models/user');

    //var id = '68378bfd33f705e8429cd5fd111';
    //
    //if(!ObjectID.isValid(id)){
    //    console.log('ID not valid');
    //}
        //mongoose short cut
    //Todo.find({
    //    _id: id
    //}).then((todos) => {
    //    console.log('Todos', todos);
    //});
    //
    //Todo.findOne({
    //    _id: id
    //}).then((todo) => {
    //    console.log('Todos', todo);
    //});

    //Todo.findById(id).then( (todo) => {
    //    if (!todo){
    //        return console.log('Id not found');
    //    }
    //    console.log('todos', todo);
    //}).catch((e) => console.log(e));

    //query user for one id
    //load user mongoose model
    //user.find by id


    User.findById('58366c96334a512445f75549').then((user) => {
        if (!user) {
            return console.log('no user found');
        }

        console.log(JSON.stringify(user, undefined, 2));
    }, (e) => console.log(e));
