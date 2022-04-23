function aboutTabLoad() {
    const container = document.querySelector(".container")

    const test = document.createElement('div')
    test.textContent = "Short Spiel about how great the restaurant is"

    container.append(test);
};

export {aboutTabLoad as default};