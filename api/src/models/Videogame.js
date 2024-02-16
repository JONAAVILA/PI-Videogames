const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    platform: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    image: {
      type: DataTypes.STRING,
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
