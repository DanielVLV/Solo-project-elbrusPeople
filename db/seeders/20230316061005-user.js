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

    await queryInterface.bulkInsert('Users', [{

      firstName: 'Admin',
      lastName: 'Admin',
      avatar: 'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9896883.jpg',
      country: 'Moscow',
      email: 'admin@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'Oleg',
      lastName: 'Dodenko',
      avatar: 'https://avatars.githubusercontent.com/u/96767851?v=4',
      country: 'Istanbul',
      email: 'oleg@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Artiom',
      lastName: 'Oganesyan',
      avatar: 'https://avatars.githubusercontent.com/u/50775595?v=4',
      country: 'Baikonur',
      email: 'artiom@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Sergei',
      lastName: 'Mazaev',
      avatar: 'https://avatars.githubusercontent.com/u/119875201?v=4',
      country: 'Bangkok',
      email: 'sergei@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Sergei',
      lastName: 'Dochkin',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bull-Riding2-Szmurlo.jpg',
      country: 'Las Vegas',
      email: 'sergei@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Denis',
      lastName: 'Obraztsov',
      avatar: 'https://avatars.githubusercontent.com/u/77483722?v=4',
      country: 'Dubai',
      email: 'denis@.ru',
      password: '$2b$10$wJk5gzOyoqdW/HbZiU5YEOAaRVyWywg2U.ftVN/JwSBa4kKsJHuBu',
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
