const server = require("./src/server");
const { sequelize } = require("./src/DB_connection");

const PORT = process.env.PORT || 3001;

sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Listening on port " + PORT);
    });
  })
  .catch((err) => console.log(err));
