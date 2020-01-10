module.exports = (model, Schema) => {
  const Task = new Schema({
    task: String,
    isDone: {
      type: Boolean,
      default: false
    }
  })
  return model('Task', Task)

}