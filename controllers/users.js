const db = require('../db')

const getUsers = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const editUser= async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const deleteUser= async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { getUsers, editUser, deleteUser }