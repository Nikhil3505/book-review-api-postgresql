
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(process.env.bookdb, process.env.postgresql, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("./user")(sequelize, Sequelize);
db.Book = require("./book")(sequelize, Sequelize);
db.Review = require("./review")(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Review);
db.Review.belongsTo(db.User);
db.Book.hasMany(db.Review);
db.Review.belongsTo(db.Book);

module.exports = db;
