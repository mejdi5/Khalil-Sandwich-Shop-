const router = require("express").Router();
const { getProduits, addProduit, editProduit, deleteProduit } = require('../controllers/produits')

//CRUD
router.get("/", getProduits);  
router.post("/", addProduit);
router.put("/:produitId", editProduit);
router.delete("/:produitId", deleteProduit);


module.exports = router;