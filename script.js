const header=  document.querySelector("header");

window.addEventListenener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nabar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toogle('open');
};

