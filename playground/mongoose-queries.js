  const {ObjectID} = require('mongodb');

  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/todo');
  const {User} = require('./../server/models/user');

  var id = '5a113c39e358e718f88aaf82';


  if(!ObjectID.isValid(id)) {
    console.log('User not valid');
  }

  // Todo.find({
  //   _id: id
  // }).then((todos) => {
  //   console.log('Todos', todos);
  // });
  //
  // Todo.findOne({
  //   _id: id
  // }).then((todo) => {
  //   console.log('Todo', todo);
  // });

  User.findById('5a113c39e358e718f88aaf82').then((user) => {
    if(!user) {
      return console.log('User not found');
    }
    console.log('User by Id', user);
  }).catch((e) => console.log(e));

  User.findOne({
    _id: id
  }).then((user) => {
    console.log('User', user);
  });
