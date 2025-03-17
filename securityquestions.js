document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('security-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const birthplace = document.getElementById('birthplace').value.trim();
        const school = document.getElementById('school').value.trim();
        
        // Form validation
        if (birthplace === '') {
            showError('Please enter your birth city');
            return;
        }
        
        if (school === '') {
            showError('Please enter your first school name');
            return;
        }
        
        // Get previous form data from sessionStorage
        let userData = JSON.parse(sessionStorage.getItem('userData')) || {};
        
        // Add security questions answers
        userData.birthplace = birthplace;
        userData.school = school;
        
        // Save to sessionStorage
        sessionStorage.setItem('userData', JSON.stringify(userData));
        
        // Show success message
        alert('Sign up successful!');
        
        // In a real app, you'd send this data to a server
        console.log('All user data:', userData);
        
        // Redirect to success page or dashboard
        // window.location.href = 'dashboard.html';
    });
    
    // Helper function to show errors
    function showError(message) {
        alert(message);
    }
    
    // Check if user came from previous step
    // If not, redirect to first page
    if (!sessionStorage.getItem('userData')) {
        // Uncomment in production
        // window.location.href = 'index.html';
    }
});