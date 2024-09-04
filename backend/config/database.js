const config = require("./index"); // importing the index entry file

module.exports = {
  development: {
    storage: config.dbFile,
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      schema: process.env.SCHEMA,
    },
  },
};

// DEVELOPMENT AND PRODUCTION
// - defining different environments

// STORAGE
// DIALECT
// DIALECT OPTIONS
// MIGRATION STORAGE
// - this will be the SequelizeMeta table in db
// - default is sequelize
// SEEDER STORAGE
// - sequelize: store seeds in a table on sequelize db
// - other options would be json and none
// LOG QUERY PARAMETERS
// TYPE VALIDATION
// DEFINE
