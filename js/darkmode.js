const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'light') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
});