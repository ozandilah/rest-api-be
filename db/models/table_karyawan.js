"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Jabatan = require("./table_jabatan");
const Karyawan = sequelize.define(
  "table_karyawans",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      references: {
        model: "table_jabatans",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    alamat: {
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
    modelName: "table_karyawans",
  }
);

Karyawan.belongsTo(Jabatan, {
  foreignKey: "id_jabatan",
  as: "jabatan",
});
module.exports = Karyawan;
