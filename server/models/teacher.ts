import * as bcrypt from 'bcryptjs';
export default function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
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
        validate: {
            notEmpty: true
        }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description:{
      type: DataTypes.STRING,
    },
    photo:{
      type: DataTypes.BLOB
    }
  }, {
    classMethods: {
      validatePassword: (encryptedPassword, password) => bcrypt.compareSync(password, encryptedPassword)
    }
  });

  Teacher.beforeCreate( teacher => hashPass(teacher) );

  Teacher.beforeUpdate( teacher => hashPass(teacher) );

  function hashPass(teacher) {
    const salt = bcrypt.genSaltSync(10);
    teacher.set('password', bcrypt.hashSync(teacher.password, salt));
  }
  return Teacher;
};
