const API_POST = 'https://gorest.co.in/public/v2/posts';
const API_COMMENTS = 'https://gorest.co.in/public/v2/comments';

async function getPost(){
    const response = await fetch(`${API_POST}/${id}`);
    const post = await response.json();
    return console.log(post);
}

getPost();
