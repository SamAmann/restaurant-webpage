import { createHtmlElement } from ".";

function loadContact() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHtmlElement('h2', '', ['welcome'], '', 'Contact Us'));
    main.appendChild(createHtmlElement('p', '', ['description']
        , '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'));
    return main;
}

export { loadContact };