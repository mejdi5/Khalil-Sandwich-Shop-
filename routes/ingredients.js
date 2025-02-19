const router = require("express").Router();
const { getIngredients, addIngredient, editIngredient, deleteIngredient } = require('../controllers/ingredients')

//CRUD
router.get("/", getIngredients);  
router.post("/", addIngredient);
router.put("/:ingredientId", editIngredient);
router.delete("/:ingredientId", deleteIngredient);


module.exports = router;