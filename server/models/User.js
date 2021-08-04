const { db } = require("./index.js");

module.exports = (db, Sequelize) => {
    return db.define("users", {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            required: true
        },
        surname: {
            type: Sequelize.STRING,
            required: true
        },
        email: {
            type: Sequelize.STRING,
            required: true
        },
        password: {
            type: Sequelize.STRING,
            required: true
        }
    }
)};