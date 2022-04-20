import logoImg from './logo.svg';

function pageLoad() {

    const content = document.querySelector("#content");

    const header = document.createElement('header');

    const name = document.createElement('div')
    name.textContent = 'Tasty Nosh'

    const logo = new Image();
    logo.src = logoImg;
    logo.setAttribute('id', 'logo');

    const headerBtns = document.createElement('div');
    headerBtns.setAttribute('id', 'header-btns');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = "About";
    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact Us";

    headerBtns.append(homeBtn,menuBtn,aboutBtn,contactBtn);
    header.append(name);
    header.append(logo);
    header.append(headerBtns);

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const copywrite = document.createElement('div');
    copywrite.setAttribute('class', 'copywrite');

    const cwrite1 = document.createElement('h2');
    cwrite1.textContent = "Delicious Bistro Style Food!";
    const cwrite2 = document.createElement('div');
    cwrite2.textContent = "Made with love";
    const cwrite3 = document.createElement('div');
    cwrite3.textContent = "Natural - Fresh - Homemade";

    copywrite.append(cwrite1,cwrite2,cwrite3);
    container.append(copywrite);

    const footer = document.createElement('footer');
    const copyright = document.createElement('div');
    copyright.textContent = "Copyright: - Oliver Browning 2022"

    footer.append(copyright);

    content.append(header,container,footer);
};

export {pageLoad as default};