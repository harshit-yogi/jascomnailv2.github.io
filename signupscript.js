document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        // Form validation
        if (name === '') {
            showError('Please enter your name');
            return;
        }
        
        if (email === '') {
            showError('Please enter your email');
            return;
        }
        
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            return;
        }
        
        // Store data in sessionStorage
        const userData = {
            name: name,
            email: email,
            password: password
        };
        
        // Save to sessionStorage
        sessionStorage.setItem('userData', JSON.stringify(userData));
        
        // Redirect to security questions page
        window.location.href = 'securityquestions.html';
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    // Helper function to show errors
    function showError(message) {
        alert(message);
    }
});