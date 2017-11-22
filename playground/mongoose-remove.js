  const {ObjectID} = require('mongodb');

  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/todo');
  const {User} = require('./../server/models/user');

  // Todo.remove({}).then((result) => {
  //   console.log(result);
  // })

  //Todo.findOneAndRemove
  //Todo.findByIdAndRemove

  Todo.findByIdAndRemove('5a150afa62c42711d4ef9d34').then((todo) => {
    console.log(todo);
  });

  // Todo.findOneAndRemove({_id: 'asdf'}).then((todo) => {
  //   console.log(todo);
  // });
