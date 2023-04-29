import './style.css';
import Background from './img/lobby.jpg';
import { Header, setActiveButton } from './header';
import { loadHome } from './home';


function createHtmlElement(type, id, aClasses, src, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (aClasses) element.classList.add(...aClasses);
    if (src) element.src = src;
    if (content) element.textContent = content;
    return element;
}

const body = document.querySelector('body');
body.appendChild(Header());

const main = document.createElement('main');
main.id = 'main';
body.appendChild(main);

loadHome();
setActiveButton(document.querySelector('#home'));

export { createHtmlElement }