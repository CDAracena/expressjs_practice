const knex = require('knex')(require('./knexfile'))

module.exports = {
    createUser ({username, password, email}) {
        console.log(`Add ${username} with password: ${password} and email: ${email}`)
       return knex('user').insert({
           username,
           password,
           email
       })
    }
}