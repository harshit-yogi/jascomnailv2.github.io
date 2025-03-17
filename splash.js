// Universal splash effect for Jascom Mail website
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

// Create splash effect on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create initial splash at center of page
    createSplash(window.innerWidth / 2, window.innerHeight / 2);
    
    // Add splash effect on click for the entire document
    document.body.addEventListener('click', function(e) {
        createSplash(e.clientX, e.clientY);
    });
});

// Export the function so it can be used by other scripts if needed
window.createSplash = createSplash;