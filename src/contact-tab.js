function contactTabLoad() {
    const container = document.querySelector(".container")

    const test = document.createElement('div')
    test.textContent = "The Contact Module is Loading"

    container.append(test);
};

export {contactTabLoad as default};