// Create DOM elements to be able to update them later with the info retrieved.
const button = document.querySelector('button');
const fullName = document.querySelector("#fullName");
const profileBio = document.querySelector('#bio');
const image = document.querySelector('#profilePicture');
const url = document.querySelector('#homeUrl');



button.addEventListener('click', async function ()  {
    const username = document.getElementById('username').value;
    // 1. We don API call to retrieve data from the GitHub API.
    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log('Response Object: ', response);
    // 2. We now obtained a json file but we need to convert it into JS. 
    const data = await response.json();
    console.log('Data Object: ', data);
    
    // 3. Update of the DOM elements that we have previously listed in order to be able to use them now to update them with the info retrieved from the API.
    fullName.textContent = data.name;
    profileBio.textContent = data.bio;
    image.src = data.avatar_url;
    url.innerHTML = `<a href="${data.html_url}">${data.login}</a>`;
});