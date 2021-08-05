const Sequelize = require("sequelize");
const UserModel = require("./User.js");
const PostModel = require("./Post.js");

const db = new Sequelize("heroku_1b0e515a023e5c0", "b0006858b92fec", "5c021dd1", {
    dialect: "mysql",
    host: "eu-cdbr-west-01.cleardb.com",
    port: "3306",
    logging: console.log,
});

const User = UserModel(db, Sequelize);
const Post = PostModel(db, Sequelize);

User.hasMany(Post, {foreignKey: 'ID_USER', onDelete: "CASCADE"});
Post.belongsTo(User);
// Post.belongsTo(User, {
//     foreignKey: "userId",
//     as: "user"
// });


module.exports = { db, User, Post };