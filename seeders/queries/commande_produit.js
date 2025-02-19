const query = `INSERT INTO commande_produit
 (id, commande_id, produit_id, quantite) VALUES 
    (1, 3, 5, 2), 
    (2, 2, 3, 4),
    (3, 1, 2, 1),
    (4, 1, 4, 3)
    ;`;

module.exports = query