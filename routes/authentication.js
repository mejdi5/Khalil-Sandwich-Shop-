const router = require("express").Router();
const { registerController, loginController, logoutController } = require('../controllers/authentication')


//REGISTER
router.post("/register", registerController); 

//LOGIN
router.post("/login", loginController); 

//LOGOUT
router.post("/logout", logoutController); 

module.exports = router;