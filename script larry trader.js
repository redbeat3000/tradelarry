// script.js
const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
    // JavaScript for toggling background color
    document.getElementById('toggleBtn').addEventListener('click', function() {
        document.getElementById('mainBody').classList.toggle('bg-dark');
        document.getElementById('mainBody').classList.toggle('bg-light');
      });