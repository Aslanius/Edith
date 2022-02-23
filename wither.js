const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
        header.classList.add("scrolled")
    }
    else if (window.scrollY <= 400) {
        header.classList.remove("scrolled")
    }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
