const db = require('../../db.js')

const args = process.argv.slice(2); // Get command-line arguments

if(args.length == 0) {
    console.log(`❌ Veuillez entrer le nom le la table: (exemple: npm run create-table Users)`)
    return;
}

const table = args[0];
const query =  require(`../queries/${table}.js`) 


const createQuery = 
    `SET FOREIGN_KEY_CHECKS = 0;
    ${query}
    SET FOREIGN_KEY_CHECKS = 1;`
db.query(createQuery, (err) => {
    if (err) {
        console.error(`❌ Erreur le creation de la table ${table}`, err.message);
        return;
    }
    console.log(`✅ Creation de la table ${table} avec succes!`);
    return;
})