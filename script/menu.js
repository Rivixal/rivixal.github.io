document.addEventListener('DOMContentLoaded', function() {
    const moreLink = document.getElementById('more');
    const sidebar = document.querySelector('.sidebar');

    moreLink.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('show');
    });
});

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const moreLink = document.getElementById('morem');
    const sidebar = document.querySelector('.sidebar');

    moreLink.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('show');
    });
});

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
}

