const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully !"))
  .catch((error) => console.log(error));

