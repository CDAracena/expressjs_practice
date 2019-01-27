const CreateUser = document.querySelector('.createUser');

CreateUser.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = CreateUser.querySelector('.username').value 
    const password = CreateUser.querySelector('.password').value 
    const email = CreateUser.querySelector('.email').value 
    post('/createUser', {
        userName,
        password,
        email
    })
})

function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}