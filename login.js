document.addEventListener('DOMContentLoaded', function() {
    const registerContainer = document.getElementById('registerContainer');

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const registerUsername = document.getElementById('registerUsername').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const registerMessage = document.getElementById('registerMessage');

        // Save the credentials to localStorage
        localStorage.setItem('username', registerUsername);
        localStorage.setItem('password', registerPassword);

        registerMessage.style.color = 'green';
       
        // Redirect to the home page after registration
        setTimeout(() => {
            window.location.href = 'homepage.html';
        }, 2000);
    });
});
