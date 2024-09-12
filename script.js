document.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});