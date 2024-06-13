const { Sequelize } = require("sequelize");

// Perbaikan: Gunakan operator '||' untuk fallback ke "development" jika process.env.NODE_ENV tidak terdefinisi
const env = process.env.NODE_ENV || "development";
const config = require("./config");

// Pastikan bahwa konfigurasi untuk environment yang dipilih sudah benar dan lengkap
const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    dialect: config[env].dialect,
  }
);

module.exports = sequelize;
