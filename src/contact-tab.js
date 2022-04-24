function contactTabLoad() {
    const container = document.querySelector(".container")

    const title = document.createElement('h2')
    title.textContent = "Contact Us";

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    const number = document.createElement('div');
    number.textContent = "Telephone - 01332 123456";
    const email = document.createElement('div');
    email.textContent = "Email - info@dragonflypub.co.uk"
    content.append(number,email);

    const address = document.createElement('div');
    address.textContent = "Address ~ The Dragonfly, Bush Tree Road, Buntingham, Kent, TR4 8GH";

    const form = document.createElement('form');

    const topForm = document.createElement('div');
    
    const formName = document.createElement('div')
    const formNameLabel = document.createElement('label')
    formNameLabel.textContent = "Name"
    formNameLabel.setAttribute('for', 'name')
    const formNameInput = document.createElement('input')
    formNameInput.setAttribute('type', 'text');
    formNameInput.setAttribute('id', 'name')
    formName.append(formNameLabel,document.createElement('br'),formNameInput);

    const formEmail = document.createElement('div')
    const formEmailLabel = document.createElement('label')
    formEmailLabel.textContent = "Email"
    formEmailLabel.setAttribute('for', 'email')
    const formEmailInput = document.createElement('input')
    formEmailInput.setAttribute('type', 'email');
    formEmailInput.setAttribute('id', 'email')
    formEmail.append(formEmailLabel,document.createElement('br'),formEmailInput);

    const formPhone = document.createElement('div')
    const formPhoneLabel = document.createElement('label')
    formPhoneLabel.textContent = "Phone"
    formPhoneLabel.setAttribute('for', 'phone')
    const formPhoneInput = document.createElement('input')
    formPhoneInput.setAttribute('type', 'tel');
    formPhoneInput.setAttribute('id', 'phone')
    formPhone.append(formPhoneLabel,document.createElement('br'),formPhoneInput);

    const formMessage = document.createElement('div');
    formMessage.setAttribute('class', 'message');
    const formMessageLabel = document.createElement('label');
    formMessageLabel.textContent = "Message";
    formMessageLabel.setAttribute('for', 'message');
    const formMessageInput = document.createElement('textarea');
    formMessageInput.setAttribute('id', 'message');
    formMessage.append(formMessageLabel,document.createElement('br'),formMessageInput);

    topForm.append(formName,formEmail,formPhone,formMessage);
    
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.setAttribute('type', 'submit');

    form.append(topForm,submit);

    container.append(title,content,address,form);
};

export {contactTabLoad as default};

// Address, Phone number, email, contact form skeleton?