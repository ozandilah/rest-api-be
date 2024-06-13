const Jabatan = require("../../../db/models/table_jabatan");
const Department = require("../../../db/models/table_department");
const AppErr = require("../../../utils/appErr");

// Membuat jabatan baru
async function createJabatan(req, res, next) {
  try {
    const { id_department, nama_jabatan } = req.body;
    const jabatan = await Jabatan.create({ id_department, nama_jabatan });
    res.status(201).send(jabatan);
  } catch (error) {
    next(new AppErr(error.message, 400));
  }
}

// Mengupdate jabatan
async function updateJabatan(req, res, next) {
  try {
    const { id } = req.params;
    const { id_department, nama_jabatan } = req.body;
    const updated = await Jabatan.update(
      { id_department, nama_jabatan },
      { where: { id } }
    );
    if (updated[0] === 0) {
      return next(new AppErr("Jabatan not found", 404));
    }
    const updatedJabatan = await Jabatan.findOne({ where: { id } });
    res.status(200).send(updatedJabatan);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Menghapus jabatan
async function deleteJabatan(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await Jabatan.destroy({ where: { id } });
    if (!deleted) {
      return next(new AppErr("Jabatan not found", 404));
    }
    res.status(204).send("Jabatan deleted");
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Mendapatkan semua jabatan
async function findAllJabatan(req, res, next) {
  try {
    const jabatans = await Jabatan.findAll({
      include: [
        {
          model: Department,
          as: "department",
        },
      ],
    });
    res.status(200).send(jabatans);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Mendapatkan satu jabatan
async function findOneJabatan(req, res, next) {
  try {
    const { id } = req.params;
    const jabatan = await Jabatan.findOne({
      where: { id },
      include: [
        {
          model: Department,
          as: "department",
        },
      ],
    });
    if (!jabatan) {
      return next(new AppErr("Jabatan not found", 404));
    }
    res.status(200).send(jabatan);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

module.exports = {
  createJabatan,
  updateJabatan,
  deleteJabatan,
  findAllJabatan,
  findOneJabatan,
};
