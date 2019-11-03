'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    client: DataTypes.STRING,
    room: DataTypes.STRING,
    reservationStartDate: DataTypes.STRING,
    reservationStartTime: DataTypes.STRING,
    reservationEndDate: DataTypes.STRING,
    reservationEndTime: DataTypes.STRING,
    notes: DataTypes.STRING,
    employeeNotes: DataTypes.STRING,
    status: DataTypes.STRING,
    cancellationNotes: DataTypes.STRING
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};