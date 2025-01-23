const posts = [
    {
        title: "New Website Features",
        content: "We have launched new features for building apps!",
        time: "10:00 AM, 07 Sep 2024",
        likes: 10,
        dislikes: 2,
        url: "#",
        userReaction: null // Tracks user reaction: 'like', 'dislike', or null
    },
    {
        title: "New Jobs In The Job Section",
        content: "We have new jobs available!",
        time: "11:31 AM, 19 Sep 2024",
        likes: 100,
        dislikes: 90,
        url: "https://griffin71.github.io/linetechh/jobs.html",
        userReaction: null
    },
    {
        title: "Venter Ventee!",
        content: "We have a new website available which provides users with therapy and an opportunity to listen to others. Kindly check it out (just click share & the link will automatically be copied. T's and C's may apply.)",
        time: "11:37 AM, 19 Sep 2024",
        likes: 900,
        dislikes: 133,
        url: "https://griffin71.github.io/Venter-Ventee/",
        userReaction: null
    }
];

const postContainer = document.getElementById('news-posts');

function updateNews() {
    postContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>Posted at: ${post.time}</small>
            <button id="like-btn-${index}" onclick="toggleReaction(${index}, 'like')">Like (${post.likes})</button>
            <button id="dislike-btn-${index}" onclick="toggleReaction(${index}, 'dislike')">Dislike (${post.dislikes})</button>
            <button onclick="sharePost('${post.url}')">Share</button>
            <hr>
        `;
        postContainer.appendChild(postDiv);
    });
}

function toggleReaction(index, reaction) {
    const post = posts[index];

    if (post.userReaction === reaction) {
        // If the same reaction is clicked again, remove it
        post.userReaction = null;
        reaction === 'like' ? post.likes-- : post.dislikes--;
    } else {
        // Remove the previous reaction if any
        if (post.userReaction === 'like') post.likes--;
        if (post.userReaction === 'dislike') post.dislikes--;

        // Add the new reaction
        post.userReaction = reaction;
        reaction === 'like' ? post.likes++ : post.dislikes++;
    }

    updateNews();
}

function sharePost(url) {
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
    });
}

// Initial rendering of posts
updateNews();

