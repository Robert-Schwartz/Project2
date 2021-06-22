// Sign up Form Function
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const profPic = document.querySelector('#file-up');

    //const formData = new FormData();

    //formData.append("name", username.value);
    //formData.append("files", profPic)
    // POST the username, email, and password from the form to our server,
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            formData,
            headers: { 'Content-Type': 'application/json' }
        })
        // check the response status
        if (response.ok) {
            console.log('Sign-up successful');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);