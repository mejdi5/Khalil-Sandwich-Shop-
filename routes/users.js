const router = require("express").Router();
const { getUsers, editUser, deleteUser } = require('../controllers/users')

//CRUD
router.get("/", getUsers);  
router.put("/:userId", editUser);
router.delete("/:userId", deleteUser);


module.exports = router;