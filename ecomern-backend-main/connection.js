require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://gayatri:12345@cluster0.qcuxpjz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
