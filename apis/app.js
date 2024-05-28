const button = document.querySelector('button');
const fullName = document.querySelector("#fullName");
const profileBio = document.querySelector('#bio');
const image = document.querySelector('#profilePicture');
const url = document.querySelector('#homeUrl');



button.addEventListener('click', async () => {
    const username = document.getElementById('username').value;

    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log('Response Object: ', response);
    const data = await response.json();
    console.log('Data Object: ', data);
    fullName.textContent = data.name;
    profileBio.textContent = data.bio;
    image.src = data.avatar_url;
    url.textContent = data.html_url;
});