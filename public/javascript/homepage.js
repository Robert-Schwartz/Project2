async function signUp() {
    const response = await fetch('/signup', {
        method: get,
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/signup')
     } else {
        alert(response.statusText);
    }
}

document.querySelector('#sign-up').addEventListener('click', signUp);