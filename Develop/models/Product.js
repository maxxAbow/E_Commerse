// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const ProductTag = require('./ProductTag');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false      
    },
    prduct_name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: true
    },
    stock: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      defaultValue: 10
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'category_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

Category.hasMany(Product);

module.exports = Product;
