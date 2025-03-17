document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordRecoveryForm');
    
    // Add form submission handling if needed
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // You can add validation logic here
            const username = document.getElementById('username').value;
            const city = document.getElementById('city').value;
            const school = document.getElementById('school').value;
            
            if (username && city && school) {
                // In a real application, you would send this data to a server
                console.log('Form submitted:', { username, city, school });
                
                // Redirect to new password page
                window.location.href = 'newpassword.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Add subtle animation for better user experience
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderBottom = '2px solid white';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderBottom = '1px solid white';
        });
    });
});