const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const blogTextEl = document.querySelector('#blog-text');
const submitBtn = document.querySelector('#submit');



submitBtn.addEventListener('click', function(event) {

    event.preventDefault();

    const blogPost = {
        username: usernameEl.value,
        title: titleEl.value,
        blogText: blogTextEl.value
    }

    localStorage.setItem('blog', JSON.stringify(blogPost));
});