async function userFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('.find-friend').value;
    
    const response = await fetch('api/users', {
        method: 'GET',
        body: JSON.stringify({
            name
        }),
        headers: { 'Content-Type': 'application/json' }

    });
     if (response.ok) {
         document.location.replace('/')
     } else {
         alert(response.statusText);
     }

}
document.querySelector('.find-friend-form');