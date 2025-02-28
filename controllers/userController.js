const User = require("../model/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
  
    
    const user = await User.create({ name, email, password:hashedPassword });
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

//===================== Login- API ============================================//
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");;

    // Check if user exists
    if (!user || !user.password) {  
      console.log("User not found or password missing:", user);
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match Result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong password",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: token,
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Error logging in user",
      error: error.message,
    });
  }
};

//=============================== Get USER -API =================================//

exports.getUser = async (req,res) => {
     const userId = req.user.id

     try {
        const user = await User.findById(userId)
        if(!user){
          return res.satus(400).json( { 
            success: false,
            message: "Invalid credencials",
        })
      }

      return res.status(200).json({
        success: true,
        message: "data fetch successfully",
        data: user
      })
     } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error in fetch data",
        error,
      });
     }
}