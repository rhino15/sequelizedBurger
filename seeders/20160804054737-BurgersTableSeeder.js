'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Burgers', [{
        burger_name: 'Shake Your Honeymaker Burger (comes with honey mustard)',
        devoured: false
      }, {
        burger_name: "I've Created a Muenster Burger",
        devoured: false
      }, {
        burger_name: 'If Looks Could Kale Burger',
        devoured: false
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
