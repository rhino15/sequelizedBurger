'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    tableName: 'burgers',

    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Burgers;
};