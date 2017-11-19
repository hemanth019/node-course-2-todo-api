//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'hemanth', age:36};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Eat lunch',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Padma',
    age: 60,
    location: 'Bagmane Tech Park'
  }, (err, result) => {
    if(err) {
      return console.log('insertion failed', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.close();
});
