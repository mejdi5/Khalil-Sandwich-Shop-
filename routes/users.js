const router = require("express").Router();
const { getUsers, getUser, editUser, deleteUser } = require('../controllers/users')

//CRUD
router.get("/", getUsers);  
router.get("/:userId", getUser);
router.put("/:userId", editUser);
router.delete("/:userId", deleteUser);


module.exports = router;