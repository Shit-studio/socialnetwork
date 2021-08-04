const Sequelize = require("sequelize");
const UserModel = require("./User.js");

const db = new Sequelize("heroku_1b0e515a023e5c0", "b0006858b92fec", "5c021dd1", {
    dialect: "mysql",
    host: "eu-cdbr-west-01.cleardb.com",
    port: "3306",
    logging: console.log,
});

const User = UserModel(db, Sequelize);

// const DBInit = async () => {
//     await db.sync({force: true});
//     await User.create({
//         name: "aab",
//         surname: "aab",
//         email: "aab",
//         password: "aab"
//     });
//     console.log("DB synced");
// }

// db.sync();

module.exports = { db, User };