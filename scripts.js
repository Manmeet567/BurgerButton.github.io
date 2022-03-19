document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.menu-toggler').onclick = function(){
        document.querySelector('.menu-toggler').classList.toggle('active');
        document.querySelector('.navbar-menu').classList.toggle('active');
    }
})