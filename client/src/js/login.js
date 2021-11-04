async function submitInformation(e) {
    const form = document.querySelector('form');
    const error = document.querySelector('.error');


    // reset errors
    error.textContent = '';

    // get values
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
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