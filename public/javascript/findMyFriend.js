async function findMyFriendFormHandler(event) {
    event.preventDefault();

    const username =document.querySelector('.find-my-friend').value.trim;
    console.log("username", username)

    const response = await fetch(`/api/users/${id}`, {
        method: 'POST',

        body: JSON.stringify({
            username
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log("username", username)
    if (response.ok) {
        document.location.replace('/' + dbUserData.id);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.find-friend-submit').addEventListener('click', findMyFriendFormHandler);