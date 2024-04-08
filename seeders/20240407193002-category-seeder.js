module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const categories = [
      {
        name: "NodeJs",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      // Add other categories here with createdAt and updatedAt set to currentDate
    ];

    return queryInterface.bulkInsert("categories", categories);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
