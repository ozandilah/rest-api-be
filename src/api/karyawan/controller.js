const Karyawan = require("../../../db/models/table_karyawan");
const Jabatan = require("../../../db/models/table_jabatan");
const AppErr = require("../../../utils/appErr");

// Membuat karyawan baru
async function createKaryawan(req, res, next) {
  try {
    const { id_jabatan, name, age, gender, tanggal_lahir, alamat } = req.body;
    const karyawan = await Karyawan.create({
      id_jabatan,
      name,
      age,
      gender,
      tanggal_lahir,
      alamat,
    });
    res.status(201).send(karyawan);
  } catch (error) {
    next(new AppErr(error.message, 400));
  }
}

// Mengupdate karyawan
async function updateKaryawan(req, res, next) {
  try {
    const { id } = req.params;
    const { id_jabatan, name, age, gender, tanggal_lahir, alamat } = req.body;
    const updated = await Karyawan.update(
      { id_jabatan, name, age, gender, tanggal_lahir, alamat },
      { where: { id } }
    );
    if (updated[0] === 0) {
      return next(new AppErr("Karyawan not found", 404));
    }
    const updatedKaryawan = await Karyawan.findOne({ where: { id } });
    res.status(200).send(updatedKaryawan);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Menghapus karyawan
async function deleteKaryawan(req, res, next) {
  try {
    const { id } = req.params;
    const deleted = await Karyawan.destroy({ where: { id } });
    if (!deleted) {
      return next(new AppErr("Karyawan not found", 404));
    }
    res.status(204).send("Karyawan deleted");
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Mendapatkan semua karyawan
async function findAllKaryawan(req, res, next) {
  try {
    const karyawans = await Karyawan.findAll({
      include: [
        {
          model: Jabatan,
          as: "jabatan",
        },
      ],
    });
    res.status(200).send(karyawans);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

// Mendapatkan satu karyawan
async function findOneKaryawan(req, res, next) {
  try {
    const { id } = req.params;
    const karyawan = await Karyawan.findOne({
      where: { id },
      include: [
        {
          model: Jabatan,
          as: "jabatan",
        },
      ],
    });
    if (!karyawan) {
      return next(new AppErr("Karyawan not found", 404));
    }
    res.status(200).send(karyawan);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
}

module.exports = {
  createKaryawan,
  updateKaryawan,
  deleteKaryawan,
  findAllKaryawan,
  findOneKaryawan,
};
