const query = 
      `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL
    );
      `;
      
module.exports = query