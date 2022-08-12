const express = require("express");
const routes = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/tavern/", routes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
    next();
});

// connect to db
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to mongo DB && listening on the port", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
