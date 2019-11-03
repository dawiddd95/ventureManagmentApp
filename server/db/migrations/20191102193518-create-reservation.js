'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      client: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      reservationStartDate: {
        type: Sequelize.STRING
      },
      reservationStartTime: {
        type: Sequelize.STRING
      },
      reservationEndDate: {
        type: Sequelize.STRING
      },
      reservationEndTime: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      employeeNotes: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      cancellationNotes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Reservations');
  }
};