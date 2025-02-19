const query = 
      `CREATE TABLE IF NOT EXISTS produits (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255) UNIQUE NOT NULL,
            prix DECIMAL(10,2) NOT NULL
      );`;     
      
module.exports = query