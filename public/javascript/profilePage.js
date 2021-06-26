
const input = document.querySelector("#prof-img")

    const upload = (file) => {
        fetch('/api/users/prof', {
            method: 'POST',
            body: file
        })
        .then(success => console.log(success))
        .catch(err => console.log(err));
    }
    
const onSelectFile = () => upload(input.files[0]);

input.addEventListener('change', onSelectFile, false);
