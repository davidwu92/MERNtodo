const { Task } = require('../models')
const axios = require('axios')

module.exports = (app) => {
  // get all tasks
  app.get('/tasks', (req, res) => {
    Task.find()
    .then((tasks) => {
      // res.sendStatus(200)
      res.json(tasks)
    })
    .catch((e) => console.error(e))
  })

  // POST a task
  app.post('/task', (req, res) => {
    Task.create(req.body)
        .then(() => res.sendStatus(200))
        .catch(e=> console.error(e))
  })

  // UPDATE a task
  app.put('/task/:id', (req, res) => {
    Task.updateOne({ _id: req.params.id }, { isDone: true })
        .then(() => res.sendStatus(200))
        .catch((e) => console.error(e))
  })

//  DELETE a task
app.delete('/task/:id', (req, res) => {
    Task.deleteOne({ _id: req.params.id })
    .then(() =>  res.sendStatus(200))
    .catch(e => console.error(e))
})

}