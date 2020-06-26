module.exports = function (sequelize, DataType) {

const PR = sequelize.define("PR", {
    routineName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sets: {

      type: DataTypes.INTEGER,
      allowNull: false
    },
    exerciseOne: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repOne: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    exerciseTwo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repTwo: {
      type: DataType.INT,
      allowNull: false,
    },
    exerciseThree: {
      type: DataTypes.STRING,
      allowNull: false
    },    
    repThree: {
      type: DataType.INT,
      allowNull: false,
    },
  });
  
  return PR;
};