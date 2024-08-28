"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await UserType.bulkCreate(
      [
        {
          name: "Online",
          street: "www",
          city: "all",
          state: "all",
          zip: 99999,
        },
        {
          name: Mission,
          street: "455 Mission St",
          city: "San Francisco",
          state: "CA",
          zip: 94123,
        },
        {
          name: "Richmond",
          street: "123 44th Ave",
          city: "San Francisco",
          state: "CA",
          zip: 94103,
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
