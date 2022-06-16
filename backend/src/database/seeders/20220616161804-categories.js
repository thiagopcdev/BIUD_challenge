module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [
        {
          description: 'estudo de caso',
        },
        {
          description: 'revisão bibliométrica',
        },
        {
          description: 'pesquisa ação',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};