const express = require("express");
const chalk = require("chalk");
// const mongoose = require("mongoose");
const users = require("./routes/api/users");
const passport = require("passport");
const cors = require("cors");
const { db } = require("./models");

const port = 5000;
const app = express();

app.use(cors());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

db.sync({force: true})
    .then(() => {
        console.log(chalk.green("DB synced!"));
    });

// const db = require("./config/keys").mongoURI;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log(chalk.green("MongoDB successfully connected")))
//     .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

app.listen(port, () => console.log(chalk.green(`Server is running on port ${port}`)));
module.exports = { app };