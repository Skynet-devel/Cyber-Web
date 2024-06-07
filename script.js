
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttibute('id');

        if(top >= offset && top < offset + height) {
           navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           }); 
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

