const router = require("express").Router();
const {
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
  findAllKaryawan,
  findOneKaryawan,
} = require("./controller");
router.route("/karyawan").post(createKaryawan);
router.route("/karyawan").get(findAllKaryawan);
router
  .route("/karyawan/:id")
  .get(findOneKaryawan)
  .put(updateKaryawan)
  .delete(deleteKaryawan);

module.exports = router;
