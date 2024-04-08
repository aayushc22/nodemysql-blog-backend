const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require("../config/config.json");

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
});

class Post extends Model {}
Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Post",
    // Other options
  }
);

module.exports = Post;
