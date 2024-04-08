const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

class Comment extends Model {}

Comment.init(
  {
    content: DataTypes.TEXT,
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;
