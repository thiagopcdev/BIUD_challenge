const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
    underscored: true,
  });

  Category.associate = (models) => {
    Category.hasOne(models.Article,
      { foreignKey: 'categoryId', as: 'articles' });
  };

  return Category;
};

module.exports = Category;