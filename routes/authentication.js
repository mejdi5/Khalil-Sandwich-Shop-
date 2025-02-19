const router = require("express").Router();
const { registerController, loginController, logoutController } = require('../controllers/authentication')


//REGISTER
router.post("/register", registerController); 

//LOGIN
router.post("/register", loginController); 

//LOGOUT
router.post("/register", logoutController); 

module.exports = router;