const User = require("./user");
const Category = require("./category");
const Blog = require("./blog");
const Comment = require("./comment");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Blog, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});
Blog.belongsTo(Category, {
  foreignKey: "category_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = {
  User,
  Category,
  Blog,
  Comment,
};
