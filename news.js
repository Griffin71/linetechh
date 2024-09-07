const posts = [
    {
        title: "New Website Features",
        content: "We have launched new features for building apps!",
        time: "10:00 AM, 07 Sep 2024",
        likes: 0,
        dislikes: 0,
        url: "#"
    },
    // More posts
];

const postContainer = document.getElementById('news-posts');

posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>Posted at: ${post.time}</small>
        <button onclick="likePost(${posts.indexOf(post)})">Like (${post.likes})</button>
        <button onclick="dislikePost(${posts.indexOf(post)})">Dislike (${post.dislikes})</button>
        <button onclick="sharePost('${post.url}')">Share</button>
        <hr>
    `;
    postContainer.appendChild(postDiv);
});

function likePost(index) {
    posts[index].likes++;
    updateNews();
}

function dislikePost(index) {
    posts[index].dislikes++;
    updateNews();
}

function sharePost(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
    });
}

function updateNews() {
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted at: ${post.time}</small>
            <button onclick="likePost(${posts.indexOf(post)})">Like (${post.likes})</button>
            <button onclick="dislikePost(${posts.indexOf(post)})">Dislike (${post.dislikes})</button>
            <button onclick="sharePost('${post.url}')">Share</button>
            <hr>
        `;
        postContainer.appendChild(postDiv);
    });
}
