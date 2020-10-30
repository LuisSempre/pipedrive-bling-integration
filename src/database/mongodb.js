const Mongoose = require('mongoose');

const connection = Mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = connection;