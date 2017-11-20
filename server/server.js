  var express = require('express');
  var bodyParser = require('body-parser');
  const {ObjectID} = require('mongodb');

  var {mongoose} = require('./db/mongoose');
  var {Todo} = require('./models/todo');
  var {User} = require('./models/user');



  var app = express();

  app.use(bodyParser.json());

  app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });

    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

  app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
  });

  // GET /todos/1234324
  app.get('/todos/:id', (req,res) => {
   var id = req.params.id;

   //Valid id using invalid
   //404 - send back empty send
   if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };

   //findById
    //success
      //if todo - send it back
      //if no todo - send back 404 with empty body
    //error
      //400 - and send back empty

    Todo.findById(id).then((todos) => {
        if(!todos) {
          return res.status(404).send();
        };
          res.send({todos});
      }).catch((e) => {
          res.status(400).send();
      });

  });

  app.listen(3000, () => {
    console.log('Started on port 3000');
  });

  module.exports = {app};

  // var newUser = new User({
  //   email: 'hemanth019@gmail.com'
  // })
  // var newTodo = new Todo({
  //   text: 'Cook dinner'
  // });

  // var newTodo = new Todo({
  //   text: 'Hemanths dinner',
  //   completed: true,
  //   completedAt: 1947
  // });

  // var otherTodo = new Todo({
  //   text: '  Edit this video  '
  // });
  // otherTodo.save().then((doc) => {
  //   console.log('Saved todo', doc);
  // }, (e) => {
  //   console.log('Unable to save todo');
  // });

  // newUser.save().then((doc) => {
  //   console.log('Saved new User', doc);
  // }, (e) => {
  //   console.log('Unable to save new User');
  // });
