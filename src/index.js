import './style.css';
import pageLoad from './page-load';
import homeTabLoad from './home-tab';
import menuTabLoad from './menu-tab';
import aboutTabLoad from './about-tab';
import contactTabLoad from './contact-tab';

console.log("hello! I'm working!");
pageLoad();
homeTabLoad();

function clearContainer() {
    const container = document.querySelector('.container');
    container.innerHTML = "";
}

const home = document.querySelector('.home');
home.addEventListener('click', () => {
    clearContainer();
    homeTabLoad();
});

const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    clearContainer();
    menuTabLoad();
});

const about = document.querySelector('.about');
about.addEventListener('click', () => {
    clearContainer();
    aboutTabLoad();
});

const contact = document.querySelector('.contact');
contact.addEventListener('click', () => {
    clearContainer();
    contactTabLoad();
});