const menuIcon = document.getElementById('menu');
const cancelIcon = document.getElementById('cancel');
const sidebar = document.querySelector('.sidebar');

function showSidebar() {
    sidebar.classList.add('show');
    menuIcon.style.display = 'none';
    cancelIcon.style.display = 'block'; 
}


function hideSidebar() {
    sidebar.classList.remove('show');
    menuIcon.style.display = 'block'; // Show menu icon
    cancelIcon.style.display = 'none'; // Hide cancel icon
}

menuIcon.addEventListener('click', function () {
    showSidebar();
});

cancelIcon.addEventListener('click', function () {
    hideSidebar();
});
