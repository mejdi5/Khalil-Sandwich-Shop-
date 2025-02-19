const db = require('../../db.js')
const tables = require('../../tables.js')

tables.forEach((table, index) => {
    let deleteQuery = 
       `SET FOREIGN_KEY_CHECKS = 0;
        DROP TABLE IF EXISTS ${table};
        SET FOREIGN_KEY_CHECKS = 1;`
    setTimeout(() => {
        db.query(deleteQuery, (err) => {
        if (err) {
            console.error(`❌ Error lors de suppression de la table ${table}:`, err.message);
        } else {
            console.log(`✅ Table '${table}' supprimee.`);
        }
        if (index === tables.length - 1) {
            db.end(); // Close DB connection after last table
        }
        });
    }, index * 500); // Delay for safe deletion (handles foreign key dependencies)
});

