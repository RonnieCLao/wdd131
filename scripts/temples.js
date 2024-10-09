document.getElementById('hamburger-menu').addEventListener('click', function() {
    var menu = document.getElementById('sidebar-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});