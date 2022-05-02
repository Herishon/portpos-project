// Modal Box
var modal = document.querySelector('.myModal');

var modalClose = document.querySelector('.close_btn');

window.onload = (event) => {
    modal.style.display = "block";
}

window.onclick = (event) => {
    modal.style.display = "none";
}

modalClose.onclick = function () {
    modal.style.display = "none";
}

// Hamburger Menu
var mobileMenu = document.getElementById('hamburger').addEventListener('click', function () {
    var navBar = document.getElementById('navbarNav');
    navBar.classList.toggle('show');
    this.classList.toggle('close_menu');
});