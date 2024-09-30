const posts = [
    {
        title: "New Website Features",
        content: "We have launched new features for building apps!",
        time: "10:00 AM, 07 Sep 2024",
        likes: 10,
        dislikes: 2,
        url: "#"
    },
  
    {
        title: "New Jobs In The Job Section",
        content: "We have new jobs available!",
        time: "11:31 AM, 19 Sep 2024",
        likes: 100,
        dislikes: 90,
        url: "https://griffin71.github.io/linetechh/jobs.html"
    },
    {
        title: "Venter Ventee!",
        content: "We have a new new website availabe which provides users with therapy and an opportunity to listen to others. Kindly check it out(just click share & the link will automatically be copied. . T's and C's may apply.) ",
        time: "11:37 AM, 19 Sep 2024",
        likes: 900,
        dislikes: 133,
        url: "https://griffin71.github.io/Venter-Ventee/"
    },
    
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
