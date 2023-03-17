/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('StatusAccaunts', [
      {
        userId: 1,
        status: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        status: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('StatusAccaunts', null, {});
  },
};
