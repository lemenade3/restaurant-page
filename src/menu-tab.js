// Imports menu items from different menu modules and loads them dynamically.
// Loads layout for Menu Page

import loadStarters from './menu-tab-starters';
import loadMains from './menu-tab-mains';
import loadSides from './menu-tab-sides';
import loadDesserts from './menu-tab-dessert';
import loadDrinks from './menu-tab-drink';

function menuTabLoad() {

    const container = document.querySelector(".container")

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Our Nosh";

    const menuButtons = document.createElement('div');
    menuButtons.setAttribute('id', 'menuButtons');
    const starters = document.createElement('button');
    starters.textContent = "Starters";
    const mains = document.createElement('button');
    mains.textContent = "Mains";
    const sides = document.createElement('button');
    sides.textContent = "Sides";
    const desserts = document.createElement('button');
    desserts.textContent = "Desserts";
    const drinks = document.createElement('button');
    drinks.textContent = "Drinks";

    menuButtons.append(starters,mains,sides,desserts,drinks);

    const menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menuContent')

    container.append(menuTitle,menuButtons,menuContent);

    loadStarters();

    function clearMenu() {
        menuContent.innerHTML = ""
    };

    starters.addEventListener('click', () => {
        clearMenu();
        loadStarters();
    });

    mains.addEventListener('click', () => {
        clearMenu();
        loadMains();
    });

    sides.addEventListener('click', () => {
        clearMenu();
        loadSides();
    });

    desserts.addEventListener('click', () => {
        clearMenu();
        loadDesserts();
    });

    drinks.addEventListener('click', () => {
        clearMenu();
        loadDrinks();
    });
};

export {menuTabLoad as default};