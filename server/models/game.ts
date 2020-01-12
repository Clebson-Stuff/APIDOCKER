export default function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    gameName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: true
    },
    dateOfIssue: {
      type: DataTypes.DATE
    },
    thumbnail: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM,
      values: ['aprovado','análise','rejeitado']
    },
    accesses: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0 
    },
    language: {
      type: DataTypes.
    }
  })
  return Game;
}

