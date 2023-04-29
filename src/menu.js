import { createHtmlElement } from ".";

function loadMenu() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHtmlElement('h2', '', ['welcome'], '', 'Our Menu'));
    main.appendChild(createHtmlElement('p', '', ['description']
        , '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'));
    return main;
}

export { loadMenu };