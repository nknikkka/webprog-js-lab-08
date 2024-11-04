document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim();

        if (!email || !password) {
            alert('Заповінть всі поля');
            return;
        }

        const formData = {
            email: email,
            password: password
        };

        console.log(formData);
        form.reset();
    });
});