document.addEventListener('DOMContentLoaded', function() {
    const text = "WELCOME TO JASCOM MAIL";
    const typewriterElement = document.getElementById('typewriter');
    typewriterElement.classList.add('typing');
    let i = 0;
    const speed = 80; // Typing speed in milliseconds

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Remove the cursor after typing is complete
            setTimeout(() => {
                typewriterElement.style.borderRight = 'none';
                typewriterElement.style.animation = 'none';
            }, 500);
        }
    }

    typeWriter();
    
    // Create initial splash effect when page loads
    createSplash(window.innerWidth / 2, window.innerHeight / 2);
    
    // Add splash effect on click
    document.body.addEventListener('click', function(e) {
        createSplash(e.clientX, e.clientY);
    });
    
    // Function to create splash effect
    function createSplash(x, y) {
        const splash = document.createElement('div');
        splash.className = 'splash';
        splash.style.left = x + 'px';
        splash.style.top = y + 'px';
        document.body.appendChild(splash);
        
        // Remove the splash element after animation completes
        setTimeout(() => {
            splash.remove();
        }, 2000);
    }
});