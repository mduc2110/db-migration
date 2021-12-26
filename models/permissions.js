const { Model } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//    const permission = sequelize.define("permissions", {
//       id: {
//          allowNull: false,
//          autoIncrement: true,
//          primaryKey: true,
//          type: DataTypes.INTEGER,
//       },
//       permission: {
//          type: DataTypes.STRING,
//          allowNull: false,
//       },
//    });
//    permission.associate = (models) => {
//       console.log(models);
//       // models.hasOne(roles, {
//       //    foreignKey: "roleId",
//       // });
//    };
//    return permission;
// };

module.exports = (sequelize, DataTypes) => {
   class permissions extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         // permissions.belongsTo(models.roles, {
         //    foreignKey: "roleId",
         // });
         permissions.belongsToMany(models.roles, { through: "role-permission" /* options */ });
      }
   }
   permissions.init(
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
         },
         permission: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      {
         sequelize,
         modelName: "permissions",
      }
   );
   return permissions;
};

// roleId: {
//    type: DataTypes.INTEGER,
//    references: {
//       model: {
//          tableName: "roles",
//       },
//       key: "id",
//    },
//    allowNull: false,
// },
