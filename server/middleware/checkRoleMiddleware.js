const jwt = require('jsonwebtoken')

// берем токен, проверяем на нужную роль, расшифровываем данные токена (id, email, role)
module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asdfasdfdasfasdf
            if(!token) {
                return res.status(401).json({message: "Not authorized"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role) {
                res.status(401).json({message: "Access denied"})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "Not authorized"})
        }
    }
}

