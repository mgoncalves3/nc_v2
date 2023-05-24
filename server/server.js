require("dotenv").config();

const express = require('express');
const connectDB = require('./config/db');
const customersRoutes = require('./routes/customers')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/', customersRoutes)

app.listen(process.env.PORT || 8082, () => {
  console.log(`Server is running on port: ${process.env.PORT}`)
  connectDB();
});


