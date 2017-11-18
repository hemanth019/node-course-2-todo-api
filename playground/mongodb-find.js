//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a0d1894573cbe23a8e3dd38')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch Todos', err);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count : ' + count);
  // }, (err) => {
  //   console.log('unable to fetch Todos', err);
  // });
  db.collection('NewTry').find().toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
