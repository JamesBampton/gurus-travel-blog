// Import required packages
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// Import models
const { Category, User, Blog, Comment } = require("../models");

// Import seed data
const categoriesData = require("./categories.json");
const usersData = require("./users.json");
const blogsData = require("./blogs.json");
const commentsData = require("./comments.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Seed Categories
    const categories = await Category.bulkCreate(categoriesData, { returning: true });

    // Seed Users
    
    const users = await User.bulkCreate(usersData, {
        returning: true,
      individualHooks: true, 
    });

    // Assign categoryId and userId dynamically to blogs
    for (const blog of blogsData) {
      // Assign a valid categoryId from seeded categories by matching or random fallback
      const matchedCategory = categories.find(cat => cat.id === blog.category_id) || categories[Math.floor(Math.random() * categories.length)];
      blog.category_id = matchedCategory.id;

      // Assign a valid userId from seeded users by matching or random fallback
      const matchedUser = users.find(user => user.id === blog.user_id) || users[Math.floor(Math.random() * users.length)];
      blog.user_id = matchedUser.id;

      await Blog.create(blog);
    }

    // Seed Comments with valid user_id and blog_id
    for (const comment of commentsData) {
      // Ensure comment.user_id matches an existing user
      const matchedUser = users.find(user => user.id === comment.user_id) || users[Math.floor(Math.random() * users.length)];
      comment.user_id = matchedUser.id;

      // Ensure comment.blog_id matches an existing blog
      const matchedBlog = await Blog.findByPk(comment.blog_id) || (await Blog.findOne());
      comment.blog_id = matchedBlog.id;

      await Comment.create(comment);
    }

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedDatabase();