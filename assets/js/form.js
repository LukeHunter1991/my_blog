const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const blogTextEl = document.querySelector('#blog-text');
const submitBtn = document.querySelector('#submit');
const issueEL = document.querySelector("#issue")

let blogCollection = JSON.parse(localStorage.getItem('blog')) || [];


submitBtn.addEventListener('click', function(event) {

    event.preventDefault();

    console.log(usernameEl);
    console.log(titleEl);
    console.log(blogTextEl);

    if (usernameEl.value === ""|| titleEl.value === ""|| blogTextEl.value === "") {
        issueEL.textContent = 'Please provide a username, title, and some blog text'
    } else {

    const blogPost = {
        username: usernameEl.value,
        title: titleEl.value,
        blogText: blogTextEl.value
    }



    blogCollection.push(blogPost);
    localStorage.setItem('blog', JSON.stringify(blogCollection));

    
    window.location.replace("blog.html");
}
});

// href, redirect, navigate