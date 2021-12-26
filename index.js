const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync({ alter: true }).catch((err) => {
   console.log(err.message);
});

const Role = db.roles;
const Permission = db.permissions;
app.use(express.json());
app.get("/", async (req, res) => {
   try {
      const role = {
         permission: req.body.permission,
      };
      // const result = await Permission.create(role);

      const result = await Role.findAll({
         where: {
            id: 1,
         },
         include: Permission,
         // include: [{ model: "permissions" }, { model: Permission, as: "permission" }],
      });
      // const result = await Permission.findAll();
      res.json(result);
   } catch (error) {
      res.json(error.message);
   }
});

app.listen(3434, () => {
   console.log("Server is running");
});
