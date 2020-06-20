module.exports = function (sequelize, DataTypes) {
  let PR = sequelize.define("PR", {
    routine_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INT,
      allowNull: false,
    },
    exerciseOne: {
      type: DataType.STRING,
      allowNull: false,
    },
    exerciseTwo: {
      type: DataType.STRING,
    },
    exerciseThree: {
      type: DataType.STRING,
    },
    exerciseFour: {
      type: DataType.STRING,
    },
    exerciseFive: {
      type: DataType.STRING,
    },
  });
  return PR;
};
