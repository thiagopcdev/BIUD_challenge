const Article = (sequelize, DataTypes) => {
  const Articlee = sequelize.define(
    'Article',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Articles',
      underscored: true,
    },
  );

  Articlee.associate = (models) => {
    Articlee.belongsTo(
      models.Category,
      { foreignKey: 'categoryId', as: 'categories' },
    );
  };

  return Articlee;
};

module.exports = Article;
