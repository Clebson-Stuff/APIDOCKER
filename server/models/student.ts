import * as bcrypt from 'bcryptjs';
export default function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
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
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    classMethods: {
      validatePassword: (encryptedPassword, password) => bcrypt.compareSync(password, encryptedPassword)
    }
  });

  Student.beforeCreate( student => hashPass(student) );

  Student.beforeUpdate( student => hashPass(student) );

  function hashPass(student) {
    const salt = bcrypt.genSaltSync(10);
    student.set('password', bcrypt.hashSync(student.password, salt));
    console.log(`Password ${student.password}`)
  }
  return Student;
};
