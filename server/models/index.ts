  var fs = require('fs');
  var path = require('path');
  var Sequelize = require('sequelize');
  var basename = path.basename(module.filename);
  var config = require('../config/env/config')();
  var env = config.env || 'development';
  var db = <any>{};
  var sequelize;

  if (config.db_url) {
    sequelize = new Sequelize(config.db_url);
  } else {
    sequelize = new Sequelize(config.db, config.username, config.password);
  }
fs
      .readdirSync(__dirname)
      .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
      .forEach(function (file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
      });
Object.keys(db).forEach(function (modelName) {
      if (db[modelName].associate) {
          db[modelName].associate(db);
      }
  });
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  module.exports = db;
