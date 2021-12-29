"use strict";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         username: {
            type: Sequelize.STRING,
         },
         //  roleId: {
         //     type: Sequelize.DataTypes.INTEGER,
         //     references: {
         //        model: {
         //           tableName: "roles",
         //        },
         //        key: "id",
         //     },
         //     allowNull: false,
         //  },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("users");
   },
};
