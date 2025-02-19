const db = require('../db.js')
const args = process.argv.slice(2);
const tables = require('../tables.js')

if(!args[0]) {
    tables.forEach(table => {
        let query = require(`./queries/${table}.js`)
        let seedQuery = `
            SET FOREIGN_KEY_CHECKS = 0;
            ${query}
            SET FOREIGN_KEY_CHECKS = 1;`
        db.query(seedQuery, (err) => {
            if (err) {
                console.error(`❌ Duplication des cles primaires dans la table ${table}`);
                return;
            }
            console.log(`✅ Insertion des ${table} avec succes`);
        });
    });
  return;
}

let table = args[0];
let query = require(`./queries/${table}.js`)
let seedQuery = `
    SET FOREIGN_KEY_CHECKS = 0;
    ${query}
    SET FOREIGN_KEY_CHECKS = 1;`

db.query(seedQuery, (err) => {
    if(err) {
        console.error(`❌ Erreur:`, err);
        return;
    }
    console.log(`✅ Insertion des ${table} avec succes`);
    return;
});