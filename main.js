// Function to adjust layout based on screen size
function adjustLayout() {
    const screenWidth = window.innerWidth;
    const productsContainer = document.querySelectorAll('.products-container');

    // Mobile View (below 600px)
    if (screenWidth < 600) {
        productsContainer.forEach(container => {
            container.style.flexDirection = 'column'; // Stack products vertically
            container.style.alignItems = 'center';
        });
    }
    // Tablet View (600px to 1024px)
    else if (screenWidth >= 600 && screenWidth < 1024) {
        productsContainer.forEach(container => {
            container.style.flexDirection = 'row';  // Arrange products horizontally
            container.style.justifyContent = 'center';
            container.style.flexWrap = 'wrap';      // Allow wrapping if needed
        });
    }
    // Desktop View (1024px and above)
    else {
        productsContainer.forEach(container => {
            container.style.flexDirection = 'row';  // Default horizontal layout
            container.style.justifyContent = 'space-between';
            container.style.flexWrap = 'wrap';      // Allow wrapping for larger screens
        });
    }
}

// Initial layout adjustment when page loads
window.onload = adjustLayout;

// Adjust layout on window resize
window.onresize = adjustLayout;
