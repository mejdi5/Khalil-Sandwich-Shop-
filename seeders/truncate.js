const db = require('../db.js')
const tables = require('../tables.js')
const args = process.argv.slice(2);


if(!args[0]) {
    tables.forEach(table => {
        db.query(`DELETE FROM ${table};`, (err) => {
            if (err) {
                console.error(`❌ Erreur de vidation de la table: ${table}`, err.message);
                return;
            }
            console.log(`✅ La table ${table} est videe avec succes`);
        });
    });
  return;
}

let tableName = args[0];

let truncateQuery = `
    SET FOREIGN_KEY_CHECKS = 0;
    DELETE FROM  ${tableName};
    SET FOREIGN_KEY_CHECKS = 1;`

db.query(truncateQuery, (err) => {
    if (err) {
        console.log(`❌ Erreur de vidation de la table: ${tableName}`, err);
        return;
    } 
    console.log(`✅ La table ${tableName} est videe avec succes`);
});