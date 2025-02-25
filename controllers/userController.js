

exports.register = async (req,res) => {
      const { name , email, phNumber , password} = req.body  
      // DB save  
      res.status(200).json({ name , email, phNumber , password})

}


exports.login = async (req,res) => {
      
}