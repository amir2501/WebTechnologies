const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

let allUsers = {
    'test@example.com': '1111',
    'amirbekerkinov62@example.com': '1111',
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredEmail = email.value.trim();
    const enteredPassword = password.value;

    if (allUsers[enteredEmail] && allUsers[enteredEmail] === enteredPassword) {
        alert('Login successful!');
        window.location.href = '/';
        // Perform additional actions after successful login
    } else {
        alert('Invalid email or password.');
        // Optionally, you can clear the password field or give focus back to the email field
        password.value = '';
        email.focus();
    }
});