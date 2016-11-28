    const {ObjectID} = require('mongodb'); //ES6 shortcut defunc

    const {mongoose} = require('./../server/db/mongoose');
    const {Todo} = require('./../server/models/todo');
    const {User} = require('./../server/models/user');

    //Todo.remove({}).then( (result) => {
    //    console.log(result);
    //});

    //gets the one removed and shows, removes by any elemnt
    //Todo.findOneAndRemove()
    Todo.findOneAndRemove({_id: '583b8bef27da160bff3f24df'}).then((todo) => {
        console.log(todo);
    });

    //Todo.findByIdAndRemove

    //Todo.findByIdAndRemove('583b89ee27da160bff3f24de').then((todo) => {
    //    console.log(todo);
    //});
