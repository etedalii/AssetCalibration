const User = require("../models/User");

const signup = async (req, res) => {
  if (await User.isEmailTaken(req.body.email)) {
    //throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    return res.status(200).json({
      success: false,
      user: false,
      message: "Email already taken",
    });
  }

  const user = await User.create(req.body);

  return res.status(200).json({
    success: true,
    user,
    message: "Created a user!",
  });
};

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordMatch(password))) {
    return res.status(400).json({
      success: false,
      user: false,
      message: "Incorrect name or password",
    });
  }

  return res.status(200).json({
    success: true,
    user: user,
    message: "Successfully logged in!",
  });
}

const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!users.length) {
      return res.status(200).json({ success: true, data: users, message: `User is empty` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};


module.exports = {
  login,
  signup,
  getUsers
};
