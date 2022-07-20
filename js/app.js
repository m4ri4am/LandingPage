/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



// my comments
// Add class 'active__color' to <a> when scrolling to section or when the section is near the top of the viewport
// add class 'active__color' to section when near top of viewport
// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
// Set sections as active
// Build navigation menu from sections (dynamically)




/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function (event) {
    let links = document.querySelectorAll('.menu__link'); // get all the links listed in the nav
    let sections = document.getElementsByTagName('section'); // get all the sections
    for (let i = 0; i < sections.length; i++) {
    if(sections[i].className.includes('active__color')){ // if the link is active
       links[i].className += ' active__color '; // add class 'active__color' to <a>
    }else{
        links[i].className = ' menu__link ' // remove class 'active__color' from <a>
    }
}
});
// Add class 'active__color' to <a> when near top of viewport
function addClassActive(event) {
    scrollToSection(); // scroll to section on link click
    let links = document.querySelectorAll('.menu__link'); // get all the links listed in the nav
    for (let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(' active__color', ''); // remove class 'active__color' from <a> if it is not active
    }
    event.target.className += ' active__color';// add class 'active__color' to <a> if it is active
}
// Scroll to section on link click
// Scroll to anchor ID using scroll TO event
function scrollToSection() {
    const sections = document.getElementsByClassName('tag__link'); // get all the sections
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener('click', function () { // add event listener to each link
            const section = document.getElementById(sections[i].textContent); // get the section
            window.scrollTo({ // scroll to the section
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
        );
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

function buildDynamicMenu() {
    const fragment = new DocumentFragment(); // create a new fragment (i use documentFragment instead of documentElement because it is faster)
                                              // as the dom will render only once
    const list = document.querySelector('#navbar__list');
    const sections =[];
    for(section of document.querySelectorAll('section')){
        sections.push(section.dataset.nav.replace(/\s+/g, '').toLowerCase());
    }
    sections.forEach(element => {
        const li = document.createElement('li')
        const anchor = document.createElement('a');
        anchor.onclick = addClassActive;
        anchor.className = 'tag__link';
        anchor.appendChild(li)
        li.textContent = element;
        li.className = 'menu__link';
        fragment.appendChild(anchor);
    });
    list.appendChild(fragment);
}
buildDynamicMenu();

// Set sections as active
function setActiveSection() {
    const sections = document.getElementsByClassName('tag__link');
    let el = [];
    for(let i = 0; i < sections.length; i++) {
        el.push(document.getElementById(sections[i].textContent)); //push all the sections into an array
        let rect = el[i].getBoundingClientRect(); 
        if (rect.top <= 120 && rect.bottom >= 10) { // if the section is near the top of the viewport
            el[i].className = 'tag__link active__color'; // add class 'active__color' to section
                                                         // donot add class 'active__color' as +=active__color as it will add the class twice
            el[i].style.transition = 'all 0.5s ease-in-out'; // with a transition of 0.5s ease-in-out
        }else {
            el[i].className = 'tag__link';
        } 
}
}
window.addEventListener('scroll', setActiveSection);