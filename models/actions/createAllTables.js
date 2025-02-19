const db = require('../../db.js')
const tables = require('../../tables.js')

tables.forEach((table, index) => {
    const query = require(`../queries/${table}`)
    const createQuery = 
        `SET FOREIGN_KEY_CHECKS = 0;
        ${query}
        SET FOREIGN_KEY_CHECKS = 1;`
    setTimeout(() => {
        db.query(createQuery, (err) => {
            if (err) {
                console.log(`❌ Error lors de creation de la table ${table}:`, err.message)
                return;
            }
            console.log(`✅ Creation de la table ${table} avec succes!`);
        })
    }, index * 500);
});

