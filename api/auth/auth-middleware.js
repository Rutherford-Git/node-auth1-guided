const user = require ('../users/users-model')

async function protect(req, res, next) {
    console.log('protect is working')
    next()
}

module.exports = {
    protect
    
}