const router = require("express").Router();
const {
  createDepartment,
  updateDepartment,
  deleteDepartment,
  findAllDepartments,
  findDepartmentById,
} = require("./controller");

router.route("/departement").post(createDepartment);
router.route("/departement").get(findAllDepartments);
router
  .route("/departement/:id")
  .get(findDepartmentById)
  .put(updateDepartment)
  .delete(deleteDepartment);

module.exports = router;
