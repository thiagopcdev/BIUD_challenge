const Article = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Articles',
    underscored: true,
  });

  Article.associate = (models) => {
    Article.belongsTo(models.Category,
      { foreignKey: 'categoryId', as: 'categories' });
  };

  return Article;
};

module.exports = Article;