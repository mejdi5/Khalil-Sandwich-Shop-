const query = `CREATE TABLE IF NOT EXISTS paiements (
      id INT AUTO_INCREMENT PRIMARY KEY,
      montant FLOAT NOT NULL,
      methode VARCHAR(255) NOT NULL,
      statut INT NOT NULL DEFAULT(0)
    );
  `;
      
module.exports = query