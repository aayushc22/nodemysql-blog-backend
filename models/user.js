const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    // Other options
  }
);

module.exports = User;
