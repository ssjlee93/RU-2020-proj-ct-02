module.exports = function (sequelize, DataTypes) {
  const Exercises = sequelize.define("Exercises", {
    exercise_name: {
      type: DataType.STRING,
      allowNull: false
    },
    weight: {
      type: DataType.INT
    },
    reps: {
      type: DataTypes.INT,
      allowNull: false,
      defaultValue: 10
    },
    
  });
  Exercises.associate = function(models) {
   
    Exercises.belongsTo(models.Routines, {
      foreignKey: {
        allowNull: false
      }

    });
    return Exercises;
}
  };
