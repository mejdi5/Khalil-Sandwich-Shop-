const query = `INSERT INTO paiements (id, montant, methode, statut) VALUES 
    (1, 10000, 'en ligne', 1), 
    (2, 5000, 'a la livraison', 0),
    (3, 20000, 'a importer', 0)
    ;`;

module.exports = query
