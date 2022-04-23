function menuTabLoad() {
    const container = document.querySelector(".container")

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Our Nosh";
    menuTitle.setAttribute('id', 'menuTitle');

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

    const menuItem1 = document.createElement('div');
    const menuItemTitle1 = document.createElement('div');
    menuItemTitle1.textContent = "Example Title ~ £10.00";
    const menuItemDescription1 = document.createElement('div');
    menuItemDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem1.append(menuItemTitle1,menuItemDescription1);

    const menuItem2 = document.createElement('div');
    const menuItemTitle2 = document.createElement('div');
    menuItemTitle2.textContent = "Example Title ~ £20.00";
    const menuItemDescription2 = document.createElement('div');
    menuItemDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem2.append(menuItemTitle2,menuItemDescription2);

    const menuItem3 = document.createElement('div');
    const menuItemTitle3 = document.createElement('div');
    menuItemTitle3.textContent = "Example Title ~ £30.00";
    const menuItemDescription3 = document.createElement('div');
    menuItemDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem3.append(menuItemTitle3,menuItemDescription3);

    menuContent.append(menuItem1,menuItem2,menuItem3)

    container.append(menuTitle,menuButtons,menuContent);
};

export {menuTabLoad as default};