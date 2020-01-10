const { model, Schema } = require('mongoose')

const Task = require('./Task.js')(model, Schema)

module.exports = { Task }