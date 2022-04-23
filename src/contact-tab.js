function contactTabLoad() {
    const container = document.querySelector(".container")

    const test = document.createElement('div')
    test.textContent = "Address, Phone number, email, contact form skeleton?"

    container.append(test);
};

export {contactTabLoad as default};