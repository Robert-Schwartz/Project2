
const input = document.querySelector("#prof-img")

const imgData = new FormData();

const upload = (file) => {
    const imgData = new FormData();

    imgData.append("avatar", file)

    fetch('/api/users/prof', {
        method: 'POST',
        body: imgData
    })
        .then(success => success.json())
        .catch(err => console.log(err));

}


const onSelectFile = () => upload(input.files[0]);

input.addEventListener('change', onSelectFile, false);
