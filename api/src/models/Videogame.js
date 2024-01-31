const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isDate: true
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },{
     timestamps: false
  } );
};
