const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const auth = require("./Middleware/auth");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

require("./mongoose/connection");

app.get("/", (req, res) => {
  res.send("server has started...");
});

const routesUserLogin = require("./Routes/routeUserLogin");
app.use("/userLogin", routesUserLogin);

const rouCreateAccount = require("./Routes/rouCreateAccount");
app.use("/createAccount", rouCreateAccount);

const rouToken = require("./Routes/rouToken");
app.use("/token", rouToken);

const rouAccount = require("./Routes/rouAccountPage");
app.use("/account", auth, rouAccount);

const rouLogout = require("./Routes/rouLogout");
app.use("/logout", rouLogout);

const rouUploadProduct = require("./Routes/rouUpladProduct");
app.use("/uploadProduct", auth, rouUploadProduct);

const rouAllProducts = require("./Routes/rouAllProducts");
app.use("/allProducts", rouAllProducts);

const rouDeleteProduct = require('./Routes/rouDeleteProduct')
app.use('/deleteProduct', rouDeleteProduct)


app.listen(9000, () => {
  console.log("Server has started", process.env.PORT);
});
