function password() {
    let Password = document.getElementById('password').value;
    const password = 'hakdog'

    if (Password === password) {
        message.style.color = 'green'
        document.getElementById('message').innerText = 'CORRECT!'
        window.location.href = 'profile.html' 
    }
    else {
        message.style.color = 'red';
        document.getElementById('message').innerText = 'Incorrect Password. Please try again!'
    }
}
