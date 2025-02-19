const query = 
      `CREATE TABLE IF NOT EXISTS produit_ingredient (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ingredient_id INT NOT NULL,
        produit_id INT NOT NULL,
        FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
        FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE
    );`;
      
module.exports = query