'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   username: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        email: "mauris.vel@yahoo.com",
        username: "Emmanuel",
        password: 123456
      },
      {
        email: "nascetur@aol.edu",
        username: "Lynn",
        password: 123456
      },
      {
        email: "vitae@protonmail.com",
        username: "Wallace",
        password: 123456
      },
      {
        email: "nisl.sem@google.com",
        username: "Igor",
        password: 123456
      },
      {
        email: "tempus.eu@outlook.com",
        username: "Ruth",
        password: 123456
      },
      {
        email: "rutrum@google.ca",
        username: "Ishmael",
        password: 123456
      },
      {
        email: "aliquam@hotmail.ca",
        username: "Karina",
        password: 123456
      },
      {
        email: "nisl.elementum@icloud.ca",
        username: "Raymond",
        password: 123456
      },
      {
        email: "arcu.et.pede@icloud.edu",
        username: "Xavier",
        password: 123456
      },
      {
        email: "justo.faucibus.lectus@hotmail.org",
        username: "Kato",
        password: 123456
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
