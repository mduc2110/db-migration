module.exports = (sequelize, DataTypes) => {
   const rolePermission = sequelize.define("role-permission", {
      permissionId: {
         primaryKey: true,
         allowNull: false,
         type: DataTypes.INTEGER,
         references: {
            model: {
               tableName: "permissions",
            },
            key: "id",
         },
         allowNull: false,
      },
      roleId: {
         primaryKey: true,
         allowNull: false,
         type: DataTypes.INTEGER,
         references: {
            model: {
               tableName: "roles",
            },
            key: "id",
         },
         allowNull: false,
      },
   });
   return rolePermission;
};
