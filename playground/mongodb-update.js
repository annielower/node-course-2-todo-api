//const MongoClient = require('mongodb').MongoClient;
///Same as above but ES6 Destructring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);
//ES6 Destructuring

var user = {name: 'Andrew', age: 25};
var {name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('can\'t connect to db');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
    {
        _id: new ObjectID('5836582627da160bff3f24d8')
    }, {
        $set: {
            completed: true
        }
    }, {
         returnOriginal: false
    }).then((result) => {
            console.log(result);
        })

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('58365e1a27da160bff3f24dc')
        },
        {
            $set:{
                name: 'Bobby'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal:false
        }
    ).then( (result) =>{
        console.log(result);
    })

    //db.close();
});
