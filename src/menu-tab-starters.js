function loadStarters() {
    const menuContent = document.querySelector(".menuContent");

    const menuItem1 = document.createElement('div');
    const menuItemTitle1 = document.createElement('div');
    menuItemTitle1.textContent = "Carrot and Ginger soup ~ £6.25";
    const menuItemDescription1 = document.createElement('div');
    menuItemDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem1.append(menuItemTitle1,menuItemDescription1);

    const menuItem2 = document.createElement('div');
    const menuItemTitle2 = document.createElement('div');
    menuItemTitle2.textContent = "Pan seared scallops ~ £12.95";
    const menuItemDescription2 = document.createElement('div');
    menuItemDescription2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem2.append(menuItemTitle2,menuItemDescription2);

    const menuItem3 = document.createElement('div');
    const menuItemTitle3 = document.createElement('div');
    menuItemTitle3.textContent = "Rare roast venison ~ £8.95";
    const menuItemDescription3 = document.createElement('div');
    menuItemDescription3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem3.append(menuItemTitle3,menuItemDescription3);

    const menuItem4 = document.createElement('div');
    const menuItemTitle4 = document.createElement('div');
    menuItemTitle4.textContent = "Garlic and rosemary baked Camembert ~ £12.95";
    const menuItemDescription4 = document.createElement('div');
    menuItemDescription4.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem4.append(menuItemTitle4,menuItemDescription4);

    const menuItem5 = document.createElement('div');
    const menuItemTitle5 = document.createElement('div');
    menuItemTitle5.textContent = "Pâté de campagne ~ £7.95";
    const menuItemDescription5 = document.createElement('div');
    menuItemDescription5.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue arcu, pellentesque eu pellentesque quis, ultrices eget velit. Sed maximus efficitur libero, nec scelerisque neque finibus sed";
    menuItem5.append(menuItemTitle5,menuItemDescription5);

    menuContent.append(menuItem1,menuItem2,menuItem3,menuItem4,menuItem5)
}

export {loadStarters as default};