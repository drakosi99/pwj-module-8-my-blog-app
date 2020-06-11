

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((res) => {
        return res.json()
    }).then((data) => {
        buildPosts(data)
    })
}

const buildPosts = (blogPosts) => {
    console.log(blogPosts)

    let blogPostContent = ''

    blogPosts.map((post) => {
        const postDate = new Date(parseInt(post.added_date)).toDateString()
        const postImage = `${API_BASE_URL}${post.post_image}`
        blogPostContent += `
        <div class="post">
            <div class="post-image" style="background-image: url(${postImage})"></div>
            <div class="post-content">
                <div class="post-date">${postDate}</div>
                <div class="post-title">
                    <h4>${post.title}</h4>
                </div>
                <div class="post-text">${post.content}</div>
            </div>
        </div>
        `
    })
    document.querySelector('.blog-posts-container').innerHTML = blogPostContent
}