async function submitInformation(e) {
    const form = document.querySelector('form');
    const error = document.querySelector('.error');

    // reset errors
    error.textContent = '';

    // get values
    const email = form.email.value;
    const password = form.password.value;
    const username = form.username.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;

    try {
        const res = await fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                username,
                firstName,
                lastName,
                phoneNumber
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
        if (!data.success) {
            error.textContent = data.message.split('')[0].toUpperCase() + data.message.slice(1);
        }
        if (data.success) {
            window.location.href = '/';
        }

    } catch (err) {
        console.log(err);
    }
};