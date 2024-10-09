document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('mini-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});