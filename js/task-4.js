const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (!emailValue || !passwordValue) {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);

    form.reset();
}
