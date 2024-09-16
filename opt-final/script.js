function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    // Check if the entered password is correct
    if (enteredPassword === 'secret') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Password is correct!';
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Incorrect password. Please try again.';
    }
}
