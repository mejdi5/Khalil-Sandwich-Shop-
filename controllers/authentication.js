const db = require('../db')

const registerController = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const loginController = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const logoutController = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { registerController, loginController, logoutController }