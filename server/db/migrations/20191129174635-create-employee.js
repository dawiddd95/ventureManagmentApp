'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      employeesAccess: {
        type: Sequelize.BOOLEAN
      },
      auditAccess: {
        type: Sequelize.BOOLEAN
      },
      clientsAccess: {
        type: Sequelize.BOOLEAN
      },
      reservationsAccess: {
        type: Sequelize.BOOLEAN
      },
      ordersAccess: {
        type: Sequelize.BOOLEAN
      },
      communicatorAccess: {
        type: Sequelize.BOOLEAN
      },
      profileAccess: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employees');
  }
};