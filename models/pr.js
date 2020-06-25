module.exports = function (sequelize, DataType) {

const PR = sequelize.define("PR", {
    routineName: {
      type: DataType.STRING,
      allowNull: false
    },
    sets: {
      type: DataType.INT,
      allowNull: false,
    },
    exerciseOne: {
      type: DataType.STRING,
      allowNull: false,
    },
    repOne: {
      type: DataType.INT,
      allowNull: false,
    },
    exerciseTwo: {
      type: DataType.STRING,
      allowNull: false
    },
    repTwo: {
      type: DataType.INT,
      allowNull: false,
    },
    exerciseThree: {
      type: DataType.STRING,
      allowNull: false
    },    
    repThree: {
      type: DataType.INT,
      allowNull: false,
    },
  });
  
  return PR;
};