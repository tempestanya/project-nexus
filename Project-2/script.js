document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    // Add your login validation logic here
    alert('Login form submitted with Email: ' + email + ' and Password: ' + password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    // Add your signup validation logic here
    alert('Signup form submitted with Username: ' + username + ', Email: ' + email + ' and Password: ' + password);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
