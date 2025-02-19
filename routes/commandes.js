const router = require("express").Router();
const { getCommandes, addCommande, editCommande, deleteCommande } = require('../controllers/commandes')

//CRUD
router.get("/:userId", getCommandes);  
router.post("/:userId", addCommande);
router.put("/:userId/:commandeId", editCommande);
router.delete("/:userId/:commandeId", deleteCommande);


module.exports = router;