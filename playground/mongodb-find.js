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

    //db.collection('Todos').find({
    //    _id: new ObjectID('5823bad79486784cccb513f2')
    //}).toArray().then( (docs)=> {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs, undefined, 2));
    //
    //}, (err) =>{
    //    console.log('cant get todos');
    //}); //all returns cursor pointer to docs.

    //db.collection('Todos').find().count().then( (count)=> {
    //    console.log(`Todos count: ${count}`);
    //
    //}, (err) =>{
    //    console.log('cant get todos');
    //}); //all returns cursor pointer to docs.

    db.collection('Users').find({name: 'Annie'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
       console.log('no return', err);
    });

    //db.close();
});
