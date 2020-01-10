module.exports = require('mongoose').connect("mongodb://localhost/tododb", {
  // these methods are rarely used
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// will use this when deploying to heroku
//  process.env.MONGODB_URI || 