function menuTabLoad() {
    const container = document.querySelector(".container")

    const test = document.createElement('div')
    test.textContent = "The Menu Module is Loading"

    container.append(test);
};

export {menuTabLoad as default};