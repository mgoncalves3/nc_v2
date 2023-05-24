const mongoose = require('mongoose');
require('dotenv').config('../')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
    })

    console.log(Object.keys(mongoose.connection.collections))

    console.log('Connected to db')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB;