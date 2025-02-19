const router = require("express").Router();
const { getPaiements, addPaiement, editPaiement, deletePaiement } = require('../controllers/paiements')

//CRUD
router.get("/", getPaiements);  
router.post("/", addPaiement);
router.put("/:paiementId", editPaiement);
router.delete("/:paiementId", deletePaiement);


module.exports = router;