module.exports = function (sequelize, DataTypes) {

const PR = sequelize.define("PR", {
    routineName: {
      type: DataType.STRING,
      allowNull: false
    },
    sets: {
      type: DataType.INT,
      allowNull: false
    },
    exerciseOne: {
      type: DataType.STRING,
      allowNull: false
    },
    repOne: {
      type: DataType.INTEGER,
      allowNull: false
    },
    exerciseTwo: {
      type: DataType.STRING,
      allowNull: false
    },
    exerciseThree: {
      type: DataType.STRING,
      allowNull: false
    },
  });
  return PR;
};