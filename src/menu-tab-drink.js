function loadDrinks() {
    const menuContent = document.querySelector(".menuContent");

    const menuItem1 = document.createElement('div');
    const menuItemTitle1 = document.createElement('div');
    menuItemTitle1.textContent = "Water ~ £100.95";
    const menuItemDescription1 = document.createElement('div');
    menuItemDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem1.append(menuItemTitle1,menuItemDescription1);

    const menuItem2 = document.createElement('div');
    const menuItemTitle2 = document.createElement('div');
    menuItemTitle2.textContent = "Beer ~ £5.45";
    const menuItemDescription2 = document.createElement('div');
    menuItemDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem2.append(menuItemTitle2,menuItemDescription2);

    const menuItem3 = document.createElement('div');
    const menuItemTitle3 = document.createElement('div');
    menuItemTitle3.textContent = "Red Wine ~ £8.95";
    const menuItemDescription3 = document.createElement('div');
    menuItemDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem3.append(menuItemTitle3,menuItemDescription3);

    const menuItem4 = document.createElement('div');
    const menuItemTitle4 = document.createElement('div');
    menuItemTitle4.textContent = "White Wine ~ £8.95";
    const menuItemDescription4 = document.createElement('div');
    menuItemDescription4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem4.append(menuItemTitle4,menuItemDescription4);

    const menuItem5 = document.createElement('div');
    const menuItemTitle5 = document.createElement('div');
    menuItemTitle5.textContent = "Espresso Martini ~ £15.00";
    const menuItemDescription5 = document.createElement('div');
    menuItemDescription5.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem5.append(menuItemTitle5,menuItemDescription5);

    const menuItem6 = document.createElement('div');
    const menuItemTitle6 = document.createElement('div');
    menuItemTitle6.textContent = "Pornstar Martini ~ £16.45";
    const menuItemDescription6 = document.createElement('div');
    menuItemDescription6.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem6.append(menuItemTitle6,menuItemDescription6);

    const menuItem7 = document.createElement('div');
    const menuItemTitle7 = document.createElement('div');
    menuItemTitle7.textContent = "Generic Cocktail ~ £1.95";
    const menuItemDescription7 = document.createElement('div');
    menuItemDescription7.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem7.append(menuItemTitle7,menuItemDescription7);

    const menuItem8 = document.createElement('div');
    const menuItemTitle8 = document.createElement('div');
    menuItemTitle8.textContent = "Instant Coffee ~ £25.45";
    const menuItemDescription8 = document.createElement('div');
    menuItemDescription8.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem8.append(menuItemTitle8,menuItemDescription8);

    menuContent.append(menuItem1,menuItem2,menuItem3,menuItem4,menuItem5,menuItem6,menuItem7,menuItem8);
}

export {loadDrinks as default};