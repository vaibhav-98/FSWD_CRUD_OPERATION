const express = require('express')
const { register, login, getUser} = require('../controllers/userController')
const isLoggedIn = require('../middeleware/authMiddeleware')

const router = express.Router()

router.post('/register' , register)
router.post('/login', login)
router.get('/getUser', isLoggedIn ,getUser)


module.exports = router

