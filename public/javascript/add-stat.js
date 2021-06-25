async function statFormHandler (event) {
    event.preventDefault();

    const name = document.querySelector('#stat-type').value.trim();
    const value = document.querySelector('#stat-value').value.trim();
    const game = document.querySelector('#select-game').value;

    const response = await fetch('/api/stat', {
        method: 'POST',
        body: JSON.stringify({
            name,
            value,
            game
        }), 
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};


document.querySelector('.add-form').addEventListener('submit', statFormHandler);