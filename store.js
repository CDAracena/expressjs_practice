module.exports = {
    createUser ({username, password, email}) {
        console.log(`Add ${username} with password: ${password} and email: ${email}`)
        return Promise.resolve()
    }
}