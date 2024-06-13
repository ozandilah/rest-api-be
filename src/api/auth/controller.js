const user = require("../../../db/models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsync = require("../../../utils/catchAsync");
const AppErr = require("../../../utils/appErr");
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_TOKEN, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = catchAsync(async (req, res, next) => {
  const body = req.body;

  if (!["1", "2"].includes(body.userType)) {
    throw new AppErr("Invalid user type broo..!", 400);
  }
  const newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    confirmPassword: body.confirmPassword,
  });
  if (!newUser) {
    return next(new AppErr("Failed to create user broo...!", 400));
  }
  const result = newUser.toJSON();

  delete result.password;
  delete result.deletedAt;

  result.token = generateToken({
    id: result.id,
  });

  return res.status(201).json({
    status: "success",
    data: result,
  });
});

const signin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new AppErr("Failed Login Brooo...! Please Check Email and Password", 400)
    );
  }
  const result = await user.findOne({
    where: { email: email },
  });

  if (!result || !(await bcrypt.compare(password, result.password))) {
    return next(new AppErr("Incorrect Email or Password", 401));
  }

  const token = generateToken({
    id: result.id,
  });
  return res.json({
    status: "Success",
    token,
  });
});

module.exports = {
  signup,
  signin,
};
