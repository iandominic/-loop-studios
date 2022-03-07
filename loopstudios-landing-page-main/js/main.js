/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true
})

sr.reveal(`.nav__logo, .nav__menu`,{delay: 300})
sr.reveal(`.nav__toggle`,{delay: 300})
sr.reveal(`.home__content`,{delay: 400})
sr.reveal(`.creations_content`,{delay: 400})
sr.reveal(`.about__img`,{origin: 'left', interval: 100})
sr.reveal(`.content__text`,{origin: 'left'})
sr.reveal(`.footer__logo, .footer__content`,{origin: 'top', interval: 100})


/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    const navBar = document.querySelector('.nav')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header'); 
        navBar.style.height = "4rem";
        navBar.style.transition = ".3s ease";
    }
    else {
        header.classList.remove('scroll-header');
        navBar.style.height = "9rem";
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('side-nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      sideNav = document.querySelector('.side__nav')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        sideNav.style.left ="0";
        navClose.style.transform = "rotate(180deg)";
        navClose.style.transition = "1s ease";
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        sideNav.style.left ="-800px";
        navClose.style.transform = "rotate(0deg)";
        navClose.style.transition = "1s ease";
    })
}

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)