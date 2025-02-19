const query = `INSERT INTO produit_ingredient
 (id, produit_id, ingredient_id) VALUES 
    (1, 3, 5), 
    (2, 2, 3),
    (3, 1, 2),
    (4, 4, 4),
    (5, 1, 5),
    (6, 1, 4),
    (7, 2, 5),
    (8, 2, 1)
    ;`;

module.exports = query