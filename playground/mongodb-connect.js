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

    //no need to set up data in advance
    //db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    //}, (err, result) => {
    //    if (err) {
    //        return console.log('Unable to insert todo', err);
    //    }
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //})

    //db.collection('Users').insertOne({
    //    name: 'Annie',
    //    age: 12,
    //    location: 'Sydney'
    //}, (err, result) => {
    //
    //    if (err) {
    //        return ('couldn\'t insert user')
    //
    //    }
    //
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    //    console.log(result.ops[0]._id.getTimestamp());
    //
    //});

    db.close();
});
