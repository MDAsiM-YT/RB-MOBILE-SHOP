// Show loading screen on page load
window.onload = function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none'; // Hide loading screen after loading
};

// Toggle category menu
const categoryToggle = document.getElementById('category-toggle');
const categories = document.getElementById('categories');

categoryToggle.addEventListener('click', () => {
    categories.style.display = categories.style.display === 'block' ? 'none' : 'block';
});

// Hide category menu when clicking outside
document.addEventListener('click', (event) => {
    if (!categoryToggle.contains(event.target) && !categories.contains(event.target)) {
        categories.style.display = 'none';
    }
});
