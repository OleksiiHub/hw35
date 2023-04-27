const API_POST = 'https://gorest.co.in/public/v2/posts';


const blogContainer = document.getElementById('list_names');

function createErrorMessageBox(message) {
    const errorMessageBox = document.createElement('div');
    errorMessageBox.classList.add('alert', 'alert-danger');
    errorMessageBox.innerText = message;
    return errorMessageBox;
}

async function getPost() {
    return await fetch(API_POST)
        .then(response => {
            if (!response.ok) {
                throw Error('Користувачі незнайдені');
            }
            return response.json()
        })

        .then((posts) => {
            posts.forEach(post => {
                const idListName = createPost(post);
                blogContainer.appendChild(idListName);
            })

        })
        .catch((error) => {
            const errorMessageBox = createErrorMessageBox(error.message)
            blogContainer.appendChild(errorMessageBox);

        });
}
getPost();


function createPost(post) {
    const userNames = document.createElement('li');
    userNames.classList.add('nav-item');

    const userNamesId = document.createElement('a');
    userNamesId.classList.add('nav-link');
    userNamesId.target = '_blank';
    userNamesId.href = `./userblog.html?id=${post.user_id}`;

    userNamesId.innerText = `Name: ${post.user_id}`;

    userNames.appendChild(userNamesId);

    return userNames;

}

