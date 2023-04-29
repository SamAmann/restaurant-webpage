import { createHtmlElement } from "./index";

function loadHome() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createHtmlElement('h2', '', ['welcome'], '', 'Welcome to Kompaire Restaurant'));
    main.appendChild(createHtmlElement('p', '', ['description']
        , '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'));

    return main;
}

export { loadHome };