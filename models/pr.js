module.exports = function (sequelize, DataTypes) {

const PR = sequelize.define("PR", {
    routineName: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: 0
    },
    exerciseOne: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    repOne: {
      type: DataTypes.INTEGER,
      allowNull: 0
    },
    exerciseTwo: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    repTwo: {
      type: DataTypes.INTEGER,
      allowNull: 0,
    },
    exerciseThree: {
      type: DataTypes.STRING,
      allowNull: 0
    },    
    repThree: {
      type: DataTypes.INTEGER,
      allowNull: 0,
    },
  });
  
  return PR;
};