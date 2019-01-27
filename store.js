const knex = require('knex')(require('./knexfile'))
const crypto = require('crypto')
module.exports = {
    saltHashPassword,
    createUser ({username, password, email}) {
        console.log(`Add ${username} with password: ${password} and email: ${email}`)
        const { salt, hash } = saltHashPassword(password)
       return knex('user').insert({
           salt,
           encrypted_password: hash,
           username,
           email
       })
    }
}


function saltHashPassword(password) {
    const salt = randomString()
    const hash = crypto.createHmac('sha512', salt).update(password)
    return {
        salt,
        hash: hash.digest('hex')
    }
}

function randomString(){
    return crypto.randomBytes(4).toString('hex')
}