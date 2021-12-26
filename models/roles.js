"use strict";
const { Model } = require("sequelize");
// const permissions = require("./permissions");
module.exports = (sequelize, DataTypes) => {
   class roles extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         // roles.belongsTo(models.permissions);
         // roles.hasOne(models.permissions);
         roles.belongsToMany(models.permissions, { through: "role-permission" /* options */ });
      }
   }
   roles.init(
      {
         name: DataTypes.STRING,
         updatedAt: DataTypes.DATE,
         createdAt: DataTypes.DATE,
      },
      {
         sequelize,
         modelName: "roles",
      }
   );
   return roles;
};
