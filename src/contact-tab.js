function contactTabLoad() {
    const container = document.querySelector(".container")

    const title = document.createElement('h2')
    title.textContent = "Contact Us";

    const content = document.createElement('div');
    const number = document.createElement('div');
    number.textContent = "Telephone - 01332 123456";
    const email = document.createElement('div');
    email.textContent = "Email - info@dragonflypub.co.uk"
    content.append(number,email);

    const address = document.createElement('div');
    address.textContent = "The Dragonfly, Bush Tree Road, Buntingham, Kent, TR4 8GH";

    const form = document.createElement('form');
    const formName = document.createElement('input')
    formName.setAttribute('type', 'text');
    const formEmail = document.createElement('input');
    formEmail.setAttribute('type', 'email')
    const formPhone = document.createElement('input');
    formEmail.setAttribute('type', 'tel')
    const formMessage = document.createElement('textarea');
    const submit = document.createElement('button');
    submit.textContent = "Submit"

    form.append(formName,formEmail,formPhone,formMessage,submit);

    container.append(title,content,address,form);
};

export {contactTabLoad as default};

// Address, Phone number, email, contact form skeleton?