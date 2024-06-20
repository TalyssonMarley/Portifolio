const menuBar = document.getElementById('menu');

function menuScrolled () {
    if(scrollY > 325) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', menuScrolled);