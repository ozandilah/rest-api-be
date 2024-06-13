require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const app = express();
const authRoute = require("./src/api/auth/route");
const departmentRoute = require("./src/api/department/route");
const jabatanRoute = require("./src/api/jabatan/route");
const karyawanRoute = require("./src/api/karyawan/route");
const catchAsync = require("./utils/catchAsync");
const AppErr = require("./utils/appErr");
const globalErrorHandler = require("./controller/errorController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//all routes will be here
app.use("/api/v1/auth", authRoute);
app.use("/api/v1", departmentRoute);
app.use("/api/v1", jabatanRoute);
app.use("/api/v1", karyawanRoute);
// custom error handler
app.use(
  "*",
  catchAsync(async (req, res, next) => {
    throw new AppErr(`Can't find ${req.originalUrl} on this server`, 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, "127.0.0.1", () =>
  console.log("Server started on port", PORT)
);
