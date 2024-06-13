const Department = require("../../../db/models/table_department");
const catchAsync = require("../../../utils/catchAsync");
const AppErr = require("../../../utils/appErr");

const createDepartment = catchAsync(async (req, res, next) => {
  const { nama_department } = req.body;
  const newDepartment = await Department.create({ nama_department });
  res.status(201).json({
    status: "success",
    data: newDepartment,
  });
});

const updateDepartment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nama_department } = req.body;
  const updatedDepartment = await Department.update(
    { nama_department },
    {
      where: { id },
    }
  );
  if (updatedDepartment[0] === 0) {
    return next(new AppErr("No department found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: { id, nama_department },
  });
});

const deleteDepartment = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const deleted = await Department.destroy({
    where: { id },
  });
  if (!deleted) {
    return next(new AppErr("No department found with that ID", 404));
  }
  res.status(204).json({ message: "Department berhasil dihapus" });
});

const findAllDepartments = catchAsync(async (req, res, next) => {
  const departments = await Department.findAll();
  res.status(200).json({
    status: "success",
    results: departments.length,
    data: departments,
  });
});

const findDepartmentById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const department = await Department.findByPk(id);
  if (!department) {
    return next(new AppErr("No department found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: department,
  });
});

module.exports = {
  createDepartment,
  updateDepartment,
  deleteDepartment,
  findAllDepartments,
  findDepartmentById,
};
