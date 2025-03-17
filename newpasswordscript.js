document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newPasswordForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (!newPassword || !confirmPassword) {
                alert('Please fill in both password fields');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // Password strength check (optional)
            if (newPassword.length < 8) {
                alert('Password should be at least 8 characters long');
                return;
            }
            
            // Success - in a real app, you would send this to a server
            alert('Password created successfully!');
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }
    
    // Add focus effects to input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderBottom = '2px solid white';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderBottom = '1px solid white';
            }
        });
    });
    
    // Add subtle animation to the save button
    const saveButton = document.querySelector('.save-btn');
    if (saveButton) {
        saveButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        saveButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});