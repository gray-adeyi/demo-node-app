const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/Registration');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  })

const server = app.listen(process.env.PORT || 3000, () =>{
  console.log(`server listening... at 127.0.0.1:${server.address().port}`)})
