"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      /**
       * Add altering commands here.
       *
       * Example:
       * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
       */
      const { DataTypes } = Sequelize;
      const transaction = await queryInterface.sequelize.transaction();
      try {
         await queryInterface.createTable(
            "Permissions",
            {
               id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER,
               },
               permission: {
                  type: DataTypes.STRING,
                  allowNull: false,
               },
               createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: new Date(),
               },
               updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: new Date(),
               },
            },
            { transaction }
         );

         await transaction.commit();
      } catch (err) {
         await transaction.rollback();
         throw err;
      }
   },

   down: async (queryInterface, Sequelize) => {
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
      await queryInterface.dropTable("permissions");
   },
};

// roleId: {
//    type: Sequelize.DataTypes.INTEGER,
//    references: {
//       model: {
//          tableName: "roles",
//       },
//       key: "id",
//    },
//    allowNull: false,
// },
