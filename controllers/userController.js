const User = require("../model/userModel");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.satus(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  try {
    const user = await User.create({ name, email, password });
    res.status(200).json({
      success: true,
      message: "user created succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error,
    });
  }
};

exports.login = async (req, res) => {
      
};
