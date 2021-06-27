async function findMyFriendFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('.find-my-friend').value;
        document.location.replace(`/${username}`);
 
}

document.querySelector('.find-friend-submit').addEventListener('click', findMyFriendFormHandler);