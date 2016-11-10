//const MongoClient = require('mongodb').MongoClient;
///Same as above but ES6 Destructring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);
//ES6 Destructuring

var user = {name: 'Andrew', age: 25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('can\'t connect to db');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    //db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //    console.log(result);
    //});

    //deleteOne
    //db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    //})
    //findOneAndDelete
    //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //    console.log(result);
    //
    //})
    //
    //db.collection('Users').deleteMany({name: 'Annie'}).then((result) => {
    //    console.log(result);
    //})

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5823bcaf67cc785498844291')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});
