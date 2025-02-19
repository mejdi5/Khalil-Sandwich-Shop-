const db = require('../../db.js')

const args = process.argv.slice(2); // Get command-line arguments

if(args.length == 0) {
    console.log(`❌ Veuillez entrer le nom le la table: (exemple: npm run delete-table Users)`)
    return;
}

const table = args[0];

const deleteQuery = 
    `SET FOREIGN_KEY_CHECKS = 0;
    DROP TABLE IF EXISTS ${table};
    SET FOREIGN_KEY_CHECKS = 1;`

db.query(deleteQuery, (err) => {
    if (err) {
        console.error(`❌ Erreur le suppression de la table ${table}`, err.message);
        return;
    } else {
        console.log(`✅ Suppression de la table '${table}' avec succes.`);
        return;
    }
});