function aboutTabLoad() {
    const container = document.querySelector(".container")

    const test = document.createElement('div')
    test.textContent = "The about Module is Loading"

    container.append(test);
};

export {aboutTabLoad as default};