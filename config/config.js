require("dotenv").config({ path: `${process.cwd()}/.env` });
module.exports = {
  development: {
    username: process.env.SUPABASE_USERNAME,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DATABASE,
    host: process.env.SUPABASE_HOST,
    dialect: "postgresql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.SUPABASE_USERNAME,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DATABASE,
    host: process.env.SUPABASE_HOST,
    dialect: "postgresql",
  },
};
