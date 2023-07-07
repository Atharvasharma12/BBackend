const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose
  .connect("mongodb://localhost:27017/Boekenza3DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully !"))
  .catch((error) => console.log(error));

