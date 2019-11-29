'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    employeesAccess: DataTypes.BOOLEAN,
    auditAccess: DataTypes.BOOLEAN,
    clientsAccess: DataTypes.BOOLEAN,
    reservationsAccess: DataTypes.BOOLEAN,
    ordersAccess: DataTypes.BOOLEAN,
    communicatorAccess: DataTypes.BOOLEAN,
    profileAccess: DataTypes.BOOLEAN
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};