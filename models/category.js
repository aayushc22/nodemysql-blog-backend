const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../config/config.json");

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
});

class Category extends Model {}

Category.init(
  {
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Category",
    timestamps: false,
  }
);

module.exports = Category;
