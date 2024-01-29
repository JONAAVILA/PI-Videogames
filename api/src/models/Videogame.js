const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // platform: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // image: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // date: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate:{
    //     isDate: true
    //   }
    // },
    // rating: {
    //   type: DataTypes.INTEGER,
    //   allowNull:false
    // }
  });
};
