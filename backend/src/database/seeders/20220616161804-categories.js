module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'Categories',
    [
      {
        description: 'revisão bibliográfica',
      },
      {
        description: 'survey',
      },
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
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
