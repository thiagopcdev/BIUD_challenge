const Category = (sequelize, DataTypes) => {
  const Categoryy = sequelize.define(
    'Category',
    {
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Categories',
      underscored: true,
    },
  );

  Categoryy.associate = (models) => {
    Categoryy.hasOne(
      models.Article,
      { foreignKey: 'categoryId', as: 'articles' },
    );
  };

  return Categoryy;
};

module.exports = Category;
