function loadMains() {
    const menuContent = document.querySelector(".menuContent");

    const menuItem1 = document.createElement('div');
    const menuItemTitle1 = document.createElement('div');
    menuItemTitle1.textContent = "Deep fried cod in beer batter ~ £15.95";
    const menuItemDescription1 = document.createElement('div');
    menuItemDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem1.append(menuItemTitle1,menuItemDescription1);

    const menuItem2 = document.createElement('div');
    const menuItemTitle2 = document.createElement('div');
    menuItemTitle2.textContent = "Crayfish brioche burger ~ £18.45";
    const menuItemDescription2 = document.createElement('div');
    menuItemDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem2.append(menuItemTitle2,menuItemDescription2);

    const menuItem3 = document.createElement('div');
    const menuItemTitle3 = document.createElement('div');
    menuItemTitle3.textContent = "10oz 30 day aged Scotch ribeye steak  ~ £31.95";
    const menuItemDescription3 = document.createElement('div');
    menuItemDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem3.append(menuItemTitle3,menuItemDescription3);

    const menuItem4 = document.createElement('div');
    const menuItemTitle4 = document.createElement('div');
    menuItemTitle4.textContent = "Moving mountains vegan burger, smoked gouda ~ £14.95";
    const menuItemDescription4 = document.createElement('div');
    menuItemDescription4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem4.append(menuItemTitle4,menuItemDescription4);

    const menuItem5 = document.createElement('div');
    const menuItemTitle5 = document.createElement('div');
    menuItemTitle5.textContent = "Steak, ale and mushroom pie ~ £15.95";
    const menuItemDescription5 = document.createElement('div');
    menuItemDescription5.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem5.append(menuItemTitle5,menuItemDescription5);

    const menuItem6 = document.createElement('div');
    const menuItemTitle6 = document.createElement('div');
    menuItemTitle6.textContent = "Prawn and butternut squash laksa ~ £16.45";
    const menuItemDescription6 = document.createElement('div');
    menuItemDescription6.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem6.append(menuItemTitle6,menuItemDescription6);

    const menuItem7 = document.createElement('div');
    const menuItemTitle7 = document.createElement('div');
    menuItemTitle7.textContent = "Steak burger ~ £15.95";
    const menuItemDescription7 = document.createElement('div');
    menuItemDescription7.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem7.append(menuItemTitle7,menuItemDescription7);

    const menuItem8 = document.createElement('div');
    const menuItemTitle8 = document.createElement('div');
    menuItemTitle8.textContent = "7oz fillet steak ~ £18.98";
    const menuItemDescription8 = document.createElement('div');
    menuItemDescription8.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem8.append(menuItemTitle8,menuItemDescription8);

    menuContent.append(menuItem1,menuItem2,menuItem3,menuItem4,menuItem5,menuItem6,menuItem7,menuItem8);
}

export {loadMains as default};