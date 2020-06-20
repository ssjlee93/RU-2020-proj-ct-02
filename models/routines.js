module.exports = function (sequelize, DataTypes) {
    const Routines = sequelize.define("Routines", {
      routine_name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      sets: {
        type: DataTypes.INT,
        allowNull: false,
        defaultValue: 1
      },
    
});
Routines.associate = function(models) {
   
    Routines.hasMany(models.Exercises, {
      onDelete: "cascade"

    })

    };
    return Routines;

  };