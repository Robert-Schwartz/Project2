async function findMyFriendFormHandler(event) {
    event.preventDefault();

    const username =document.querySelector('.find-my-friend').value.trim;
    console.log("username", username)

    const response = await fetch('/api/users', {
        method: 'GET',
        body: JSON.stringify({
            username
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("username", username)
    if (response.ok) {
        document.location.replace('/profile' + dbUserData.id);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.find-friend-form').addEventListener('submit', findMyFriendFormHandler);