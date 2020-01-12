import * as bcrypt from 'bcryptjs';
export default function(sequelize, DataTypes) {
  var Dev = sequelize.define('Dev', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },description:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      validatePassword: (encryptedPassword, password) => bcrypt.compareSync(password, encryptedPassword)
    }
  });

  Dev.beforeCreate( dev => hashPass(dev) );

  Dev.beforeUpdate( dev => hashPass(dev) );

  function hashPass(dev) {
    const salt = bcrypt.genSaltSync(10);
    dev.set('password', bcrypt.hashSync(dev.password, salt));
    console.log(`Password ${dev.password}`)
  }
  return Dev;
};
