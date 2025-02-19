const db = require('../db')

const registerController = async (req, res) => {
    try {
        const { nom, email } = req.body;

        db.query(`SELECT count(*) as count FROM users WHERE email = ?;`, [email], (err, results) => {
            if (err) {
                return res.status(500).json({ erreur: err.message });
            }
            if(results[0].count != 0) {
                return res.status(400).json({ erreur: "Email est deja pris" });
            }
        });

        db.query(`INSERT INTO users (nom, email) VALUES (?, ?);`, [nom, email], (err, result) => {
            if (err) {
                return res.status(500).json({ erreur: err.message });
            }
            return res.status(201).json({ message: "Utlisateur inscrit avec succes" }); 
        });
    } catch (error) {
        return res.status(500).json({erreur: error.message});
    }
}

const loginController = async (req, res) => {
    try {
        const { email } = req.body;

        db.query(`SELECT email FROM users WHERE email = ?;`, [email], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if(!results[0].email) {
                return res.status(400).json({error: "Aucun utilisateur avec cet email"});
            }

            db.query(`SELECT * FROM users WHERE email = ?;`, [email], (err, results) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                return res.status(200).json({ user: results[0] }); 
            });
        });

    } catch (error) {
        console.log(error)
    }
}

const logoutController = async (req, res) => {
    try {
        return res.status(200).json({ user: null });
    } catch (error) {
        console.log(error)
    }
}


module.exports = { registerController, loginController, logoutController }