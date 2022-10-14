const posts = [
    {
        id: "1",
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false,
    },
    {
        id: "2",
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
    },
    {
        id: "3",
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment:
            "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false,
    },
];

document.body.addEventListener("click", (e) => {

    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    }
});

function handleLikeClick(postId) {
    const targetPostObj = posts.filter(function (post) {
        return postId === post.id;
    })[0];

    let likeIconClass = "";

    if (targetPostObj.isLiked) {
        targetPostObj.likes--;
    } else {
        targetPostObj.likes++;
    }
    targetPostObj.isLiked = !targetPostObj.isLiked;

    render();
    console.log(posts);
}

function getPostsHtml() {
    let postPageHtml = "";

    posts.forEach((post) => {
        let likeIconClass = "";
        if (post.isLiked) {
            likeIconClass = "liked";
        }
        console.log(`Post: ${post.isLiked}`);

        postPageHtml += `        
                <section>
                    <div class="post-meta flex" id="${post.id}">
                            <img
                                class="rounded author-avatar"
                                src="${post.avatar}"
                                alt="${post.name}"
                            />
                        <div class="author-meta flex">
                            <p class="bold">${post.name}</p>
                            <p>${post.location}</p>
                        </div>
                        <!-- /.author-meta -->
                    </div>
                    <!-- /.post-meta -->

                        <img
                            src="${post.post}"
                            alt="self portrait of ${post.name}"
                        />
                    <div class="comments">

                        <div class="social">
                        <i class="fa-regular fa-heart ${likeIconClass}" data-like="${post.id}"></i>
                        <i class="fa-regular fa-comment"></i>
                        <i class="fa-regular fa-paper-plane"></i>
                            
                        </div>
                        <!-- /.social -->
                        <p class="bold likes"><span>${post.likes}</span> likes</p>
                        <p><span class="bold">${post.username}</span>
                            ${post.comment}
                        </p>
                    </div>
                </section>        
    `;
    });
    return postPageHtml;
}

function render() {
    document.body.innerHTML = `
    <header class="card-header flex">
        <div class="logo">
            <img src="images/logo.png" alt="Oldagram" />
        </div>
        <img class="rounded" src="images/user-avatar.png" alt="" />
        </header>
        <main class="flex-column">${getPostsHtml()}</main>`;
}

render();
