const db = require('../db')

const getUsers = async (req, res) => {
    try {
        db.query(`SELECT * FROM users;`, (err, results) => {
            if (err) {
                return res.status(500).json({ erreur: err.message });
            }
            res.status(200).json({
                users: results
            });
        });
    } catch (error) {
       return res.status(500).json(error);
    }
}

const editUser= async (req, res) => {
    try {
        const { userId } = req.params;
        const { nom, email } = req.body;

        db.query(`UPDATE users 
                    SET nom = ?, email = ? 
                    WHERE id = ?;`, [nom, email, userId], (err) => {
            if (err) {
                return res.status(500).json({ erreur: err.message });
            }
            res.status(200).json({ message: "✅ Cet utilisateur a ete mis a jour!" });
        });
    } catch (error) {
        console.log(error)
    }
}

const deleteUser= async (req, res) => {
    try {
        const { userId } = req.params; 
        let query = `DELETE FROM users WHERE id = ?;`;

        db.query(query, [userId], (err, result) => {
            if (err) {
                console.error(`❌ Error deleting user: ${err.message}`);
                return res.status(500).json({ error: err.message });
            }

            console.log(`✅ User with ID ${userId} deleted successfully.`);
            res.status(200).json({ message: "✅ User deleted successfully!" });
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getUsers, editUser, deleteUser }