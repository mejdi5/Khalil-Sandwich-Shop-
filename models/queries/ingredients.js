const query = `CREATE TABLE IF NOT EXISTS ingredients 
      (id INT AUTO_INCREMENT PRIMARY KEY,
         nom VARCHAR(255) UNIQUE NOT NULL
      );`;
      
module.exports = query