module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Articles',
      [
        {
          title: 'Artigo 1',
          description: 'Este é o primeiro artigo',
          category_id: 1,
        },
        {
          title: 'Artigo 2',
          description: 'Este é o segundo artigo',
          category_id: 1,
        },
        {
          title: 'Artigo 3',
          description: 'Este é o terceiro artigo',
          category_id: 2,
        },
        {
          title: 'Artigo 4',
          description: 'Este é o quarto artigo',
          category_id: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};