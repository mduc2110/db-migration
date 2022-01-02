const express = require("express");
const db = require("./models");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const { globalAgent } = require("http");
db.sequelize.sync({ alter: true }).catch((err) => {
   console.log(err.message);
});

const Role = db.roles;
const Permission = db.permissions;
const User = db.users;
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

app.post("/user", async (req, res) => {
   try {
      // const result = await Permission.create(role);
      const user = {
         username: req.body.username,
      };
      const result = await User.create(user);
      // const result = await Permission.findAll();
      res.json(result);
   } catch (error) {
      res.json(error.message);
   }
});
app.get("/user/:id", async (req, res) => {
   try {
      // const result = await Permission.create(role);
      const user = {
         username: req.params.id,
      };
      const result = await User.findOne({
         where: {
            id: req.params.id,
         },
         include: { model: Role, include: Permission },
      });
      // const result = await Permission.findAll();
      res.json(result);
   } catch (error) {
      res.json(error.message);
   }
});
const envPath = path.resolve(process.cwd(), ".env");
const parsed = dotenv.config({
   path: envPath,
}).parsed;
console.log(parsed);
global.env = parsed;
console.log(global.env);
app.listen(3434, () => {
   console.log("Server is running");
});
