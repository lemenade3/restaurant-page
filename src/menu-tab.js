function menuTabLoad() {
    const container = document.querySelector(".container")

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Our Nosh";
    menuTitle.setAttribute('id', 'menuTitle');

    container.append(menuTitle);
};

export {menuTabLoad as default};