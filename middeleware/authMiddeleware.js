const jwt = require("jsonwebtoken")

const isLoggedIn = (req,res,next) => {
    const token = req.header('Authorization')
    if(!token) {
        return res.status(401).json({
                success: false,
              message: "No token provided",
       })
    }

    try {
         const decode = jwt.verify(token, process.env.JWT_SECRET)
         req.user = decode;
         next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message:'Invalid token'
        })
    }
}

module.exports = isLoggedIn
