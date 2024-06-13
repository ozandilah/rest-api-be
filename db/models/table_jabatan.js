"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Department = require("./table_department");

const Jabatan = sequelize.define(
  "table_jabatans",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_department: {
      type: DataTypes.INTEGER,
      references: {
        model: "table_departments", // Referensi ke nama tabel bukan model
        key: "id",
      },
    },
    nama_jabatan: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "table_jabatans",
  }
);

Jabatan.belongsTo(Department, {
  foreignKey: "id_department",
  as: "department",
});

module.exports = Jabatan;
