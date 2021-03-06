import Sequelize from "sequelize";

const sequelize = new Sequelize("slack", "postgres", "postgres", {
  dialect: "postgres",
  define: {
    underscored: true
  }
});

const models = {
  User: sequelize.import("./user"),
  Channel: sequelize.import("./channel"),
  // Member: sequelize.import("./member.js"),
  Message: sequelize.import("./message"),
  Team: sequelize.import("./team.js")
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
