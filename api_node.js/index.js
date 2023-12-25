const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Node Todo API is running on port: ${port}`)
})

const adm = [
  

]

app.get('/', function (req, res) {
    return res.send("Hello World")
});

app.get('/adm', function (req, res) {
  return res.send(adm)
});

app.get('/adm/:id', function (req, res) {
  const id = req.params.id;
  let result = null
  for (let i = 0; i < adm.length; i++) {
      const todo = adm[i];
      if (todo.id == id) { 
          result = todo;
      }
  }
  return res.send(result);
});

app.post('/adm/', function (req, res) {
  const newId = adm.length + 1;
  const newTodo = {
      id: newId,
      todo: req.body.todo,
      completed: false
  }
  adm.push(newTodo)

  return res.send(adm);
});

app.put('/adm/', function (req, res) {

  let todoToUpdate = adm.find((todo) => {
      return todo.id == req.body.id
  })

  todoToUpdate = {
      id: req.body.id,
      todo: req.body.todo,
      completed: req.body.completed
  };


  let index = adm.findIndex((todo) => {
      return todo.id == req.body.id
  });

  adm[index] = todoToUpdate;

  return res.send(adm);
});

app.delete('/adm/:id', function (req, res) {

  let index = adm.findIndex((todo) => {
      return todo.id == req.params.id
  });

  adm.splice(index, 1);

  return res.send(adm);
});

app.put("/fio/Zahar", function(req,res){
  return res.send("<p>Тюлькин Захар</p>")
})