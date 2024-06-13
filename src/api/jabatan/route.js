const router = require("express").Router();
const {
  createJabatan,
  updateJabatan,
  deleteJabatan,
  findAllJabatan,
  findOneJabatan,
} = require("./controller");
router.route("/jabatan").post(createJabatan);
router.route("/jabatan").get(findAllJabatan);
router
  .route("/jabatan/:id")
  .get(findOneJabatan)
  .put(updateJabatan)
  .delete(deleteJabatan);

module.exports = router;
