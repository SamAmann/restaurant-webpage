import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { createHtmlElement } from './index.js';


function createHeader() {
    const header = document.createElement('header');
    header.appendChild(logo());
    header.appendChild(createNavBar());
    header.appendChild(logo());
    return header;
}

function logo() {
    const logo = document.createElement('h1');
    logo.innerHTML = 'Kompaire Restaurant';
    return logo;
}

function createNavBar() {
    const navBar = document.createElement('nav');


    const home = createHtmlElement('a', 'home', ['btn-nav'], '#home', 'Home');
    home.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        loadHome();
        setActiveButton(e.target);
    });


    const menu = createHtmlElement('a', 'menu', ['btn-nav'], '#menu', 'Menu');
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        loadMenu();
        setActiveButton(e.target);
    });

    const contact = createHtmlElement('a', 'contact', ['btn-nav'], '#contact', 'Contact');
    contact.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        loadContact();
        setActiveButton(e.target);
    });


    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    return navBar;
}

function setActiveButton(button) {
    const buttons = document.getElementsByClassName('btn-nav');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');
}




export { createHeader as Header, setActiveButton };
