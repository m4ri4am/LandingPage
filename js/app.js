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
function saveDirectory(event) {
    scrollToSection();
    let links = document.querySelectorAll('.menu__link');
    for (let i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(' active__color', '');
    }
    event.target.className += ' active__color';
}
buildMenu();

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    const sections = document.getElementsByClassName('tag__link');
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener('click', function () {
            const section = document.getElementById(sections[i].textContent);
            window.scrollTo({
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

// Build menu 
function buildMenu() {
    const fragment = new DocumentFragment();
    const list = document.querySelector('#navbar__list');
    const sections = ['section1', 'section2', 'section3', 'section4'];
    sections.forEach(element => {
        const li = document.createElement('li')
        const anchor = document.createElement('a');
        // anchor.href = '#' + element;
        anchor.onclick = saveDirectory; 
        anchor.className = 'tag__link';
        anchor.appendChild(li)
        li.textContent = element;
        li.className = 'menu__link';
        fragment.appendChild(anchor);
        if (element === 'section1') {
            li.className += ' active__color';
        }
    });
    list.appendChild(fragment);
}
// Scroll to section on link click

// Set sections as active

