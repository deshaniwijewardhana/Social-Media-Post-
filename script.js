fetch("data.json")
    .then(response => response.json())
    .then(posts => {
        const postArea = document.getElementById("posts");

        posts.forEach(post => {
            let likeCount = post.likes;

            const postDiv = document.createElement("div");
            postDiv.className = "post";

            let hashtagsHTML = "";
            post.hashtags.forEach(tag => {
                hashtagsHTML += `<span>${tag}</span>`;
            });

            postDiv.innerHTML = `
                <img src="${post.image}" alt="Post Image">
                <div class="post-content">
                    <p>${post.caption}</p>
                    <p class="hashtags">${hashtagsHTML}</p>
                    <p class="likes">Likes: <span>${likeCount}</span></p>
                    <div class="post-buttons">
                        <i class="fa-regular fa-heart like-btn"> </i>
                        <i class="fa-regular fa-comment comment-btn"></i>
                        <i class="fa-solid fa-share share-btn"></i>
                    </div>
                </div>
            `;

            const likeText = postDiv.querySelector(".likes span");
            const likeButton = postDiv.querySelector(".like-btn");

            likeButton.addEventListener("click", () => {
                if (!likeButton.classList.contains("liked")) {
                    likeCount++;
                    likeText.textContent = likeCount;
                    likeButton.classList.add("liked");
                    likeButton.classList.replace("fa-regular", "fa-solid");
                    alert("You liked this post!");
                }
            });

            const commentButton = postDiv.querySelector(".comment-btn");
            commentButton.addEventListener("click", () => {
                const comment = prompt("Write your comment:");
                if (comment) {
                    alert(`Comment added: ${comment}`);
                }
            });

            const shareButton = postDiv.querySelector(".share-btn");
            shareButton.addEventListener("click", () => {
                alert("Post shared!");
            });

            postArea.appendChild(postDiv);
        });
    });
