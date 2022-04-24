/*Exports the pageLoad function to index.js to load the intial content of the page.
Loads things such as Logos, background and basic container divs */

import logoImg from './logo.svg';

function pageLoad() {

    const content = document.querySelector("#content");

    const header = document.createElement('header');

    const name = document.createElement('div')
    name.textContent = 'The Dragonfly'

    const logo = new Image();
    logo.src = logoImg;
    logo.setAttribute('id', 'logo');

    const headerBtns = document.createElement('div');
    headerBtns.setAttribute('id', 'header-btns');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.setAttribute('class', 'home')
    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('class', 'menu')
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = "About";
    aboutBtn.setAttribute('class', 'about')
    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact Us";
    contactBtn.setAttribute('class', 'contact')

    headerBtns.append(homeBtn,menuBtn,aboutBtn,contactBtn);
    header.append(name);
    header.append(logo);
    header.append(headerBtns);

    const background = document.createElement('div');
    background.setAttribute('class', 'background');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const footer = document.createElement('footer');
    const copyright = document.createElement('div');
    copyright.textContent = "Copyright © - Oliver Browning 2022";

    footer.append(copyright);

    background.append(container,footer);

    content.append(header,background);
};

export {pageLoad as default};